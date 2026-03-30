#!/usr/bin/env pwsh

Write-Host "🔧 VS Code TypeScript Syntax Highlighting Fix Script" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Close VS Code
Write-Host "⏹️  Please close VS Code now and press any key to continue..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Step 2: Clear cache
Write-Host "🗑️  Clearing caches..." -ForegroundColor Yellow
Remove-Item -Path "$env:APPDATA\Code\Cache" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$env:APPDATA\Code\User\workspaceStorage" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✓ Cache cleared" -ForegroundColor Green

# Step 3: Clear TypeScript
Write-Host "🗑️  Clearing TypeScript cache..." -ForegroundColor Yellow
Remove-Item -Path "node_modules/.typescript" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✓ TypeScript cache cleared" -ForegroundColor Green

# Step 4: Reinstall dependencies
Write-Host "📦 Reinstalling npm dependencies..." -ForegroundColor Yellow
npm install
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# Step 5: Build
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build
Write-Host "✓ Build complete" -ForegroundColor Green

# Step 6: Ready
Write-Host ""
Write-Host "✅ All done! Now:" -ForegroundColor Green
Write-Host "1. Reopen VS Code" -ForegroundColor Cyan
Write-Host "2. Open src/pages/Index.tsx" -ForegroundColor Cyan
Write-Host "3. You should see syntax highlighting with colors!" -ForegroundColor Cyan
Write-Host ""
Write-Host "If colors still don't appear:" -ForegroundColor Yellow
Write-Host "- Press Ctrl+Shift+P" -ForegroundColor Yellow
Write-Host "- Search for: TypeScript: Restart TS Server" -ForegroundColor Yellow
Write-Host "- Wait 5 seconds" -ForegroundColor Yellow
