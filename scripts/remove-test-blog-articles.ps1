# Remove test/duplicate blog articles from myfence-clone
# Run from repo root: .\scripts\remove-test-blog-articles.ps1

$blogDir = Join-Path $PSScriptRoot "..\src\content\blog"
$files = @(
    "guide-to-wood-fences-in-seattle-types-care-benefits-for-pnw-homes.mdx",
    "guide-to-wood-fences-in-seattle-types-care-benefits-for-your-pnw-home.mdx",
    "guide-to-wood-fences-in-seattle-types-care-benefits.mdx",
    "seattle-fencing-guide-navigating-weather-styles-local-regulations-for-your-pnw-home.mdx",
    "seattle-fencing-guide-weather-styles-local-regulations-for-your-pnw-home.mdx",
    "seattle-fencing-guide-weather-styles-local-regulations.mdx",
    "seattle-fence-installation-our-simple-process-for-pnw-homes.mdx",
    "who-owns-that-fence-a-seattle-pnw-homeowner-s-guide-to-property-lines-and-fence-ownership.mdx"
)

foreach ($f in $files) {
    $path = Join-Path $blogDir $f
    if (Test-Path $path) {
        Remove-Item $path -Force
        Write-Host "Deleted: $f"
    }
}
Write-Host "Done. Run: git add src/content/blog; git commit -m 'Remove test blog articles'; git push"
