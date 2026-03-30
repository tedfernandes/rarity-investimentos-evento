# VS Code Setup Instructions

If syntax highlighting is not working for TypeScript files, please follow these steps:

## Option 1: Fast Fix (Restart VS Code)

1. **Close VS Code completely**
2. **Delete this file**: `%APPDATA%\Code\Cache\Code` (press Win+R, paste the path)
3. **Reopen VS Code**

## Option 2: If Option 1 doesn't work

1. **Close VS Code**
2. **Run in terminal:**
   ```
   npm install
   npm run build
   ```
3. **Reopen VS Code**

## Option 3: Full Reset

1. **Close VS Code**
2. **Run in PowerShell:**
   ```powershell
   Remove-Item -Path "$env:APPDATA\Code\User\workspaceStorage" -Recurse -Force -ErrorAction SilentlyContinue
   npm install
   npm run build
   ```
3. **Delete VS Code extensions and reinstall**
4. **Reopen VS Code**

## Expected Extensions (Auto-Install)

- TypeScript Vue Plugin
- Prettier
- ESLint
- Tailwind CSS IntelliSense

## Verify It's Working

1. Open `src/pages/Index.tsx`
2. You should see syntax highlighting with colors
3. Hover over any TypeScript code - you should see type hints

If still not working, VS Code's TypeScript server needs to be restarted:

- Press `Ctrl+Shift+P` → Search for `TypeScript: Restart TS Server`
- Wait 5 seconds

---

**Project Stack**: React 18 + TypeScript 5.8 + Vite + TailwindCSS
**Meta Pixel**: Installed ✓
**Event Date**: Sexta-feira 03/04 ✓
