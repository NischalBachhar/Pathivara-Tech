param(
  [Parameter(Mandatory = $true)] [string] $BackgroundPath,
  [Parameter(Mandatory = $true)] [string] $LogoPath,
  [Parameter(Mandatory = $true)] [string] $OutputPath
)

Add-Type -AssemblyName System.Drawing

$width = 1200; $height = 630
$card = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($card)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$background = [System.Drawing.Image]::FromFile($BackgroundPath)
$scale = [Math]::Max($width / $background.Width, $height / $background.Height)
$drawWidth = [int]($background.Width * $scale); $drawHeight = [int]($background.Height * $scale)
$graphics.DrawImage($background, [int](($width - $drawWidth) / 2), [int](($height - $drawHeight) / 2), $drawWidth, $drawHeight)
$overlay = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(135, 3, 15, 31))
$graphics.FillRectangle($overlay, 0, 0, $width, $height)
$accent = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(220, 82, 228, 255))
$graphics.FillRectangle($accent, 80, 130, 8, 260)
$logo = [System.Drawing.Image]::FromFile($LogoPath)
$graphics.DrawImage($logo, 120, 170, 180, 180)
$titleFont = New-Object System.Drawing.Font 'Arial', 54, ([System.Drawing.FontStyle]::Bold)
$taglineFont = New-Object System.Drawing.Font 'Arial', 22, ([System.Drawing.FontStyle]::Regular)
$white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$muted = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(225, 205, 228, 241))
$graphics.DrawString('PATHIVARA TECH', $titleFont, $white, 335, 205)
$graphics.DrawString('Digital products and future technology', $taglineFont, $muted, 340, 285)
$card.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$muted.Dispose(); $white.Dispose(); $taglineFont.Dispose(); $titleFont.Dispose(); $accent.Dispose(); $overlay.Dispose()
$logo.Dispose(); $background.Dispose(); $graphics.Dispose(); $card.Dispose()
