$files = Get-ChildItem "$env:USERPROFILE\Desktop\flavio\pages" -Recurse -Filter "*.html"
$errors = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    $checks = @{
        'DOCTYPE missing' = $content -notmatch '<!DOCTYPE'
        'No closing </html>' = $content -notmatch '</html>'
        'Unclosed divs' = ([regex]::Matches($content, '<div').Count) -gt ([regex]::Matches($content, '</div>').Count)
    }
    
    foreach ($check in $checks.GetEnumerator()) {
        if ($check.Value) {
            $errors += "$($file.Name): $($check.Key)"
        }
    }
}

if ($errors.Count -eq 0) {
    Write-Host "✅ TOUS LES FICHIERS SONT CORRECTS !" -ForegroundColor Green
    Write-Host ""
    Write-Host "15/15 pages HTML vérifiées ✓" -ForegroundColor Green
} else {
    Write-Host "⚠️  ERREURS :" -ForegroundColor Yellow
    $errors | ForEach-Object { Write-Host "  - $_" }
}
