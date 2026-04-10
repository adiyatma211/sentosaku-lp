# Deployment Guide - Sentosaku Landing Page

Complete guide for deploying the Sentosaku Landing Page Next.js application to a shared hosting environment with Node.js support.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Deployment Steps](#deployment-steps)
4. [Nginx/Apache Configuration](#nginxapache-configuration)
5. [Post-Deployment](#post-deployment)
6. [Troubleshooting](#troubleshooting)
7. [Maintenance](#maintenance)

---

## 1. Prerequisites

Before deploying, ensure your server has the following:

### Server Requirements

- **SSH Access**: Secure shell access to your hosting server
- **Node.js**: Version 18.0 or higher installed
  ```bash
  node --version  # Should be v18.0.0 or higher
  ```
- **npm/yarn**: Package manager installed
  ```bash
  npm --version  # Should be 8.0.0 or higher
  # or
  yarn --version
  ```
- **PM2**: Process manager installed globally
  ```bash
  npm install -g pm2
  pm2 --version
  ```
- **Git**: For cloning the repository (optional but recommended)
  ```bash
  git --version
  ```
- **Domain**: Domain name configured and pointing to your server
- **Disk Space**: Minimum 500MB available space

### Hosting Environment

- Shared hosting with Node.js support
- `public_html` directory access
- SSH terminal access
- Nginx or Apache web server
- SSL certificate support (recommended)

---

## 2. Pre-Deployment Checklist

Complete these steps before uploading to the server:

### 2.1 Build Application Locally

```bash
# Navigate to project directory
cd sentosa-app

# Clean previous builds (if any)
rm -rf .next

# Install dependencies
npm install

# Build for production
npm run build
```

### 2.2 Verify Build Success

Check that the build completed successfully:
```bash
# Test the production build locally
npm run start
```

Open your browser to `http://localhost:3000` and verify:
- [ ] Homepage loads correctly
- [ ] All sections are visible (Hero, Dashboard, Projects, Clients, Testimonials, Contact)
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] Responsive design works on different screen sizes
- [ ] No console errors

### 2.3 Check Environment Variables

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your production values
nano .env
```

Ensure these variables are set correctly:
```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_API_BASE_URL=http://yourdomain.com/api/v1
API_TIMEOUT=10000
API_CACHE_DURATION=3600
```

### 2.4 Test All Functionality

- [ ] All navigation links work
- [ ] Contact form (if applicable) submits correctly
- [ ] WhatsApp link opens correctly
- [ ] Modal popups work (project details)
- [ ] Client carousel auto-scrolls
- [ ] Mobile menu toggles
- [ ] Smooth scrolling works

### 2.5 Code Quality Checks

```bash
# Run linter
npm run lint

# Check for TypeScript errors
npx tsc --noEmit
```

---

## 3. Deployment Steps

### Step 1: Upload Files to Server

Choose one of the following methods:

#### Method A: Using Git (Recommended)

```bash
# SSH into your server
ssh user@yourserver.com

# Navigate to your public_html or desired directory
cd ~/public_html
# or
cd /home/username/public_html

# Clone the repository
git clone https://github.com/yourusername/sentosa-app.git

# Navigate into the project
cd sentosa-app

# Switch to production branch if applicable
git checkout production
```

#### Method B: Using FTP/SFTP

Upload the following files to your server:
- **Include**: 
  - `src/` directory
  - `public/` directory
  - `package.json`
  - `package-lock.json`
  - `tsconfig.json`
  - `next.config.js`
  - `ecosystem.config.js`
  - `.env.example`

- **Exclude**:
  - `node_modules/`
  - `.next/`
  - `.git/`
  - `.env` (copy from `.env.example` on server)
  - `logs/`

**Using FileZilla or similar:**
1. Connect via SFTP to your server
2. Navigate to `public_html`
3. Create a folder (e.g., `sentosa-app`)
4. Upload all included files
5. Set file permissions to 755 for directories, 644 for files

### Step 2: Install Dependencies on Server

```bash
# SSH into your server and navigate to project directory
cd ~/public_html/sentosa-app

# Clean install (recommended)
rm -rf node_modules package-lock.json

# Install production dependencies only
npm install --production

# Or install all dependencies (if you need to build on server)
npm install
```

**Tips:**
- Use `--production` flag to skip dev dependencies
- If npm is slow, consider using a mirror: `npm install --registry=https://registry.npmjs.org/`
- For faster installs: `npm ci` (if package-lock.json exists)

### Step 3: Build Application on Server

**Important**: Build on the same Node.js version as your production environment.

```bash
# Check Node.js version
node --version

# Ensure you're in the project directory
cd ~/public_html/sentosa-app

# Set environment to production
export NODE_ENV=production

# Build the application
npm run build
```

**If build fails:**
1. Check Node.js version (must be 18+)
2. Clear cache: `rm -rf .next`
3. Verify dependencies: `npm install`
4. Check available memory: Build requires at least 1GB RAM
5. Try with increased memory: `NODE_OPTIONS="--max-old-space-size=2048" npm run build`

### Step 4: Configure Environment Variables

```bash
# Copy example to production environment file
cp .env.example .env

# Edit the file
nano .env
# or
vim .env
```

**Your `.env` file should look like:**

```env
# Node Environment
NODE_ENV=production

# Server Port (must match ecosystem.config.js)
PORT=3000

# API Configuration
# Replace with your actual API base URL
NEXT_PUBLIC_API_BASE_URL=https://yourdomain.com/api/v1

# API Request Timeout (in milliseconds)
API_TIMEOUT=10000

# API Cache Duration (in seconds)
API_CACHE_DURATION=3600
```

**Important:**
- Never commit `.env` to version control
- Keep `.env` secure with proper file permissions: `chmod 600 .env`
- Use HTTPS for production URLs
- Rotate sensitive keys regularly

### Step 5: Start Application with PM2

#### Create Log Directory (if not exists)

```bash
mkdir -p logs
chmod 755 logs
```

#### Verify PM2 Configuration

Check `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'sentosa-app',
    script: 'npm',
    args: 'start',
    instances: 1,
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};
```

#### Start Application

```bash
# Start the application using PM2
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Setup PM2 to start on system reboot
pm2 startup
```

**Follow the instructions from `pm2 startup` command:**
- It will output a command to run as root/sudo
- Copy and paste that command
- This ensures the app starts automatically after server reboot

#### Verify Application is Running

```bash
# Check PM2 status
pm2 status

# View logs in real-time
pm2 logs sentosa-app

# Check detailed information
pm2 show sentosa-app

# Monitor application
pm2 monit
```

**Expected output:**
```
┌────┬──────────────────┬──────────┬────────┬───────┬────────┬──────────┐
│ id │ name             │ mode     │ status │ cpu   │ memory │ restarts │
├────┼──────────────────┼──────────┼────────┼───────┼────────┼──────────┤
│ 0  │ sentosa-app      │ cluster  │ online │ 0%    │ 100MB  │ 0        │
└────┴──────────────────┴──────────┴────────┴───────┴────────┴──────────┘
```

### Step 6: Test Application

```bash
# Check if application is listening on port 3000
netstat -tlnp | grep 3000
# or
ss -tlnp | grep 3000

# Test with curl
curl -I http://localhost:3000

# Should return HTTP 200 with proper headers
```

---

## 4. Nginx/Apache Configuration

### 4.1 Nginx Configuration

Create a new Nginx configuration file:

```bash
# SSH into server
sudo nano /etc/nginx/sites-available/sentosa-app
```

**Add the following configuration:**

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect to HTTPS (recommended)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Configuration
    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;

    # SSL Security Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;

    # Logging
    access_log /var/log/nginx/sentosa-app-access.log;
    error_log /var/log/nginx/sentosa-app-error.log;

    # Reverse Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        
        # WebSocket support
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # Real IP headers
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static Assets Caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Image Optimization
    location ~* \.(jpg|jpeg|png|gif|ico|webp|svg)$ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 7d;
        add_header Cache-Control "public, max-age=604800";
    }

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

**Enable the site:**

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/sentosa-app /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
# or
sudo service nginx reload
```

### 4.2 Apache Configuration

If using Apache with `mod_proxy`, create a VirtualHost:

```bash
sudo nano /etc/apache2/sites-available/sentosa-app.conf
```

**Add the following configuration:**

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    # Redirect to HTTPS
    Redirect permanent / https://yourdomain.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com

    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key

    # Logging
    ErrorLog ${APACHE_LOG_DIR}/sentosa-app-error.log
    CustomLog ${APACHE_LOG_DIR}/sentosa-app-access.log combined

    # Proxy Configuration
    ProxyPreserveHost On
    ProxyRequests Off

    # Reverse Proxy to Next.js
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/

    # WebSocket support
    ProxyPass /_next/webpack-hmr http://localhost:3000/_next/webpack-hmr
    ProxyPassReverse /_next/webpack-hmr http://localhost:3000/_next/webpack-hmr

    # Headers
    <IfModule mod_headers.c>
        Header always set X-Frame-Options "SAMEORIGIN"
        Header always set X-Content-Type-Options "nosniff"
        Header always set X-XSS-Protection "1; mode=block"
    </IfModule>

    # Compression
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>
</VirtualHost>
```

**Enable the site:**

```bash
# Enable required modules
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod ssl
sudo a2enmod headers
sudo a2enmod deflate

# Enable the site
sudo a2ensite sentosa-app.conf

# Test Apache configuration
sudo apache2ctl configtest

# Reload Apache
sudo systemctl reload apache2
# or
sudo service apache2 reload
```

### 4.3 SSL Certificate (HTTPS)

#### Using Let's Encrypt (Free SSL)

```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# For Nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# For Apache
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (certbot sets this up automatically)
sudo certbot renew --dry-run
```

#### Using Commercial SSL

1. Purchase SSL certificate from provider
2. Generate CSR (Certificate Signing Request):
   ```bash
   sudo openssl req -new -newkey rsa:2048 -nodes -keyout yourdomain.key -out yourdomain.csr
   ```
3. Submit CSR to SSL provider
4. Download certificate files
5. Upload to server and configure paths in Nginx/Apache config

---

## 5. Post-Deployment

### 5.1 Test All Pages

Open your browser to `https://yourdomain.com` and verify:

**Functionality Tests:**
- [ ] Homepage loads correctly
- [ ] All sections are visible and properly styled
- [ ] Hero section CTA buttons work
- [ ] Live dashboard displays data
- [ ] Project showcase modals open/close correctly
- [ ] Client carousel auto-scrolls
- [ ] Testimonials display properly
- [ ] Contact section links work (WhatsApp, email)
- [ ] Navigation menu functions on mobile
- [ ] Smooth scrolling works throughout

**Performance Tests:**
- [ ] Page loads within 3 seconds
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Images load progressively
- [ ] Animations are smooth (60fps)

**Responsive Design Tests:**
- [ ] Desktop view (1920x1080)
- [ ] Laptop view (1366x768)
- [ ] Tablet view (768x1024)
- [ ] Mobile view (375x667)

**Cross-Browser Tests:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 5.2 Check API Endpoints

If your app uses external APIs:

```bash
# Test API connectivity
curl -I https://yourdomain.com/api/v1/status

# Check for proper headers
curl -I https://yourdomain.com/
```

### 5.3 Verify Images Load

```bash
# Check all images are loading (in browser console)
# Look for 404 errors for images
```

### 5.4 Test SSL Configuration

```bash
# Test SSL configuration
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com

# Online SSL tester
# Visit: https://www.ssllabs.com/ssltest/
```

### 5.5 Monitor Performance

```bash
# Check PM2 metrics
pm2 monit

# View recent logs
pm2 logs sentosa-app --lines 100

# Check resource usage
pm2 show sentosa-app
```

### 5.6 Google Analytics & SEO

- [ ] Add Google Analytics tracking code
- [ ] Verify meta tags in page source
- [ ] Submit sitemap to Google Search Console
- [ ] Check robots.txt
- [ ] Verify Open Graph tags for social sharing

---

## 6. Troubleshooting

### 6.1 Common Issues and Solutions

#### Application Not Starting

**Problem:** PM2 shows application as "errored" or "stopped"

**Solutions:**

1. Check logs:
   ```bash
   pm2 logs sentosa-app
   cat logs/error.log
   cat logs/out.log
   ```

2. Check Node.js version:
   ```bash
   node --version  # Must be 18+
   ```

3. Verify port is available:
   ```bash
   netstat -tlnp | grep 3000
   ```

4. Check file permissions:
   ```bash
   ls -la
   chmod 755 .
   chmod 644 package.json
   ```

5. Restart application:
   ```bash
   pm2 restart sentosa-app
   pm2 reset sentosa-app
   ```

#### Build Fails

**Problem:** `npm run build` fails with errors

**Solutions:**

1. Clear cache:
   ```bash
   rm -rf .next node_modules
   npm install
   ```

2. Check available memory:
   ```bash
   free -h
   ```
   Build requires at least 1GB RAM

3. Increase Node.js memory:
   ```bash
   NODE_OPTIONS="--max-old-space-size=2048" npm run build
   ```

4. Check TypeScript errors:
   ```bash
   npx tsc --noEmit
   ```

5. Verify dependencies:
   ```bash
   npm outdated
   npm update
   ```

#### Port Already in Use

**Problem:** Error "EADDRINUSE: address already in use :::3000"

**Solutions:**

1. Find process using port:
   ```bash
   lsof -i :3000
   # or
   netstat -tlnp | grep 3000
   ```

2. Kill the process:
   ```bash
   kill -9 <PID>
   ```

3. Change port in `.env` and `ecosystem.config.js`:
   ```env
   PORT=3001
   ```

#### Environment Variables Not Loading

**Problem:** Application not reading environment variables

**Solutions:**

1. Verify `.env` file exists:
   ```bash
   ls -la .env
   ```

2. Check file permissions:
   ```bash
   chmod 600 .env
   ```

3. Restart PM2:
   ```bash
   pm2 restart sentosa-app
   pm2 delete sentosa-app
   pm2 start ecosystem.config.js
   ```

4. Check PM2 logs:
   ```bash
   pm2 show sentosa-app
   pm2 logs sentosa-app
   ```

#### 502 Bad Gateway / 504 Gateway Timeout

**Problem:** Nginx/Apache returns gateway errors

**Solutions:**

1. Check if Next.js is running:
   ```bash
   pm2 status
   ```

2. Check application logs:
   ```bash
   pm2 logs sentosa-app
   ```

3. Increase timeout in Nginx:
   ```nginx
   proxy_read_timeout 300;
   proxy_connect_timeout 300;
   proxy_send_timeout 300;
   ```

4. Check upstream server:
   ```bash
   curl http://localhost:3000
   ```

#### High Memory Usage

**Problem:** Application consuming excessive memory

**Solutions:**

1. Check memory usage:
   ```bash
   pm2 monit
   pm2 show sentosa-app
   ```

2. Configure PM2 memory limits in `ecosystem.config.js`:
   ```javascript
   max_memory_restart: '512M'  // Reduce memory limit
   ```

3. Restart application:
   ```bash
   pm2 restart sentosa-app
   ```

4. Optimize Next.js configuration
5. Check for memory leaks in custom code

#### 503 Service Unavailable

**Problem:** Application returns 503 error

**Solutions:**

1. Check if application is running:
   ```bash
   pm2 status
   ```

2. Restart if stopped:
   ```bash
   pm2 restart sentosa-app
   ```

3. Check Nginx/Apache status:
   ```bash
   sudo systemctl status nginx
   # or
   sudo systemctl status apache2
   ```

4. Check disk space:
   ```bash
   df -h
   ```

### 6.2 PM2 Commands for Monitoring

```bash
# View all processes
pm2 list

# Monitor real-time metrics
pm2 monit

# View logs
pm2 logs sentosa-app
pm2 logs sentosa-app --lines 50
pm2 logs sentosa-app --err

# Clear logs
pm2 flush
pm2 logs sentosa-app --lines 0

# Get detailed information
pm2 show sentosa-app
pm2 info sentosa-app

# Restart application
pm2 restart sentosa-app
pm2 reload sentosa-app  # Zero-downtime reload
pm2 restart all

# Stop application
pm2 stop sentosa-app
pm2 stop all

# Delete application
pm2 delete sentosa-app
pm2 delete all

# Reset restart count
pm2 reset sentosa-app

# Save process list
pm2 save

# Display startup script
pm2 startup
```

### 6.3 Log File Locations

**Application Logs:**
```
~/public_html/sentosa-app/logs/error.log
~/public_html/sentosa-app/logs/out.log
```

**PM2 Logs:**
```bash
# View PM2 log location
pm2 show sentosa-app | grep log

# Default PM2 logs
~/.pm2/logs/
```

**Nginx Logs:**
```
/var/log/nginx/sentosa-app-access.log
/var/log/nginx/sentosa-app-error.log
/var/log/nginx/error.log
```

**Apache Logs:**
```
/var/log/apache2/sentosa-app-access.log
/var/log/apache2/sentosa-app-error.log
/var/log/apache2/error.log
```

**View logs in real-time:**
```bash
# Application logs
tail -f ~/public_html/sentosa-app/logs/out.log
tail -f ~/public_html/sentosa-app/logs/error.log

# PM2 logs
tail -f ~/.pm2/logs/sentosa-app-out.log
tail -f ~/.pm2/logs/sentosa-app-error.log

# Nginx logs
sudo tail -f /var/log/nginx/sentosa-app-error.log

# Apache logs
sudo tail -f /var/log/apache2/sentosa-app-error.log
```

### 6.4 How to Restart the Application

**Quick Restart:**
```bash
pm2 restart sentosa-app
```

**Zero-Downtime Reload:**
```bash
pm2 reload sentosa-app
```

**Complete Restart (rebuild):**
```bash
# Stop application
pm2 stop sentosa-app

# Clean and rebuild
rm -rf .next
npm run build

# Start again
pm2 start ecosystem.config.js
```

**After Code Changes:**
```bash
# Pull latest code
git pull origin production

# Install new dependencies (if any)
npm install

# Rebuild
npm run build

# Reload with zero downtime
pm2 reload sentosa-app
```

---

## 7. Maintenance

### 7.1 Update Application

**Step-by-Step Update Process:**

```bash
# 1. SSH into server
ssh user@yourserver.com

# 2. Navigate to project directory
cd ~/public_html/sentosa-app

# 3. Backup current version (optional but recommended)
cp -r . ../sentosa-app-backup-$(date +%Y%m%d)

# 4. Pull latest changes
git pull origin production
# or
git fetch --all
git checkout production
git pull

# 5. Install new dependencies (if package.json changed)
npm install

# 6. Rebuild application
npm run build

# 7. Zero-downtime reload
pm2 reload sentosa-app

# 8. Verify application is running
pm2 status
pm2 logs sentosa-app --lines 20

# 9. Test in browser
# Visit https://yourdomain.com
```

### 7.2 View Logs

**Real-time Logs:**
```bash
# PM2 logs
pm2 logs sentosa-app

# Specific log lines
pm2 logs sentosa-app --lines 100
pm2 logs sentosa-app --lines 50 --err
```

**Log Management:**
```bash
# Clear all logs
pm2 flush

# Rotate logs (if configured)
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
```

**Search in Logs:**
```bash
# Search for errors
grep -i "error" logs/error.log

# Search for specific text
grep "text" logs/out.log

# Show last 50 lines
tail -n 50 logs/out.log
```

### 7.3 Restart/Reload Application

**Graceful Restart (Recommended):**
```bash
# Zero-downtime reload
pm2 reload sentosa-app
```

**Force Restart:**
```bash
pm2 restart sentosa-app
```

**Stop and Start:**
```bash
pm2 stop sentosa-app
pm2 start ecosystem.config.js
```

**After Configuration Changes:**
```bash
# Delete and restart with new config
pm2 delete sentosa-app
pm2 start ecosystem.config.js
pm2 save
```

### 7.4 Backup Recommendations

**Regular Backup Strategy:**

1. **Daily Database Backups** (if applicable)
2. **Weekly Code Backups**
3. **Monthly Full System Backups**

**Backup Script Example:**

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d)
BACKUP_DIR="/home/username/backups"
APP_DIR="/home/username/public_html/sentosa-app"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup application code
tar -czf $BACKUP_DIR/sentosa-app-$DATE.tar.gz $APP_DIR --exclude='node_modules' --exclude='.next' --exclude='.git'

# Backup database (if applicable)
# mysqldump -u user -p database > $BACKUP_DIR/database-$DATE.sql

# Keep only last 30 days of backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete
find $BACKUP_DIR -name "*.sql" -mtime +30 -delete

echo "Backup completed: $DATE"
```

**Make it executable and schedule:**
```bash
chmod +x backup.sh

# Add to crontab for daily backups
crontab -e

# Add this line for daily backup at 2 AM
0 2 * * * /home/username/backup.sh >> /home/username/backup.log 2>&1
```

**Manual Backup Commands:**

```bash
# Backup entire project
cd ~/public_html
tar -czf sentosa-app-backup-$(date +%Y%m%d).tar.gz sentosa-app --exclude='node_modules' --exclude='.next' --exclude='.git'

# Backup only configuration files
tar -czf config-backup-$(date +%Y%m%d).tar.gz sentosa-app/.env sentosa-app/ecosystem.config.js sentosa-app/next.config.js
```

**Restore from Backup:**

```bash
# Stop application
pm2 stop sentosa-app

# Extract backup
cd ~/public_html
tar -xzf sentosa-app-backup-20240101.tar.gz

# Navigate and reinstall dependencies
cd sentosa-app
npm install
npm run build

# Start application
pm2 start ecosystem.config.js
```

### 7.5 Health Monitoring

**Regular Health Checks:**

```bash
# Create health check script
cat > healthcheck.sh << 'EOF'
#!/bin/bash

# Check if PM2 process is running
if ! pm2 describe sentosa-app > /dev/null 2>&1; then
    echo "PM2 process not found"
    exit 1
fi

# Check if application is responding
if ! curl -f -s http://localhost:3000 > /dev/null; then
    echo "Application not responding"
    pm2 restart sentosa-app
    exit 1
fi

# Check memory usage
MEMORY=$(pm2 show sentosa-app | grep "memory usage" | awk '{print $4}')
if [ "$MEMORY" -gt 1024 ]; then
    echo "High memory usage: $MEMORY MB"
    pm2 restart sentosa-app
fi

echo "Health check passed"
EOF

chmod +x healthcheck.sh

# Schedule health checks every 5 minutes
crontab -e
# Add: */5 * * * * /home/username/public_html/sentosa-app/healthcheck.sh
```

### 7.6 Performance Optimization

**Enable PM2 Cluster Mode:**

In `ecosystem.config.js`:
```javascript
instances: 'max',  // Use all available CPU cores
exec_mode: 'cluster',
```

**Enable PM2 Log Rotation:**

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
```

**Monitor with PM2 Plus:**

```bash
pm2 link <public_key> <secret_key>
```

### 7.7 Security Best Practices

**Regular Updates:**

```bash
# Update system packages
sudo apt-get update
sudo apt-get upgrade

# Update Node.js (if using nvm)
nvm install --lts
nvm use --lts

# Update dependencies
cd ~/public_html/sentosa-app
npm outdated
npm update
```

**Security Checks:**

```bash
# Run security audit
npm audit
npm audit fix

# Check for vulnerabilities in dependencies
npm audit --production
```

**File Permissions:**

```bash
# Set proper permissions
chmod 755 .
chmod 644 *.json *.js *.ts
chmod 600 .env
chmod -R 755 src public
```

**Firewall Configuration:**

```bash
# Allow SSH, HTTP, HTTPS
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw enable

# Block port 3000 from external access (Nginx handles it)
sudo ufw deny 3000
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Apache Documentation](https://httpd.apache.org/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)

---

## Support

For deployment issues or questions:

- **Documentation**: Check this guide first
- **PM2 Logs**: `pm2 logs sentosa-app`
- **Application Logs**: `~/public_html/sentosa-app/logs/`
- **Issue Tracker**: Create an issue on GitHub repository

---

**Last Updated:** 2026-04-08

**Version:** 1.0.0

**Maintained By:** Sentosaku Tech Team
