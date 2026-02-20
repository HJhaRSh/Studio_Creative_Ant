# Troubleshooting Guide

## Dev Server Not Opening?

### Step 1: Check if server is running
Open PowerShell/Command Prompt and run:
```bash
netstat -ano | findstr :3000
```

If you see `LISTENING`, the server is running.

### Step 2: Open browser manually
The dev server doesn't always open the browser automatically. Manually open:
- **http://localhost:3000**
- Or **http://127.0.0.1:3000**

### Step 3: If port 3000 is busy
Kill the process using port 3000:
```powershell
# Find the process ID (PID) from netstat output
# Then kill it:
Stop-Process -Id <PID> -Force
```

Or use a different port:
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Step 4: Clear cache and restart
```bash
# Stop the dev server (Ctrl+C)
# Remove .next folder
Remove-Item -Recurse -Force .next

# Restart
npm run dev
```

### Step 5: Check for errors
Open browser console (F12) and check for any JavaScript errors.

### Step 6: Verify dependencies
```bash
npm install
```

## Common Issues

1. **"Port already in use"**: Another process is using port 3000
2. **"Cannot find module"**: Run `npm install`
3. **Blank page**: Check browser console for errors
4. **Build errors**: Check terminal output for specific error messages
