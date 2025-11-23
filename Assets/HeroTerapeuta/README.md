# Hero Video Files

## Lokalizacja
Pliki video powinny być umieszczone w tym katalogu: `Assets/HeroTerapeuta/`

## Wymagane pliki

### Spersonalizowane video (nazwane po terapeucie):
- `HeroSylwia.mp4` - dla Sylwii Borowiec-Herej
- `HeroMilena.mp4` - dla Mileny Filippowicz

### Generyczne video (przypisane do terapeutów):
1. `12217651_3840_2160_30fps.mp4` → Maksymilian Rosochacki
2. `14127300_3840_2160_60fps.mp4` → Dorota Wojtłowska-Wiechetek
3. `14184662_1920_1080_25fps.mp4` → Karolina Budny
4. `14652902_2560_1440_60fps.mp4` → Alina Kyselova
5. `14654981_1920_1080_60fps.mp4` → Marta Kurkiewicz
6. `14692046_1920_1080_60fps.mp4` → Maria Pac
7. `14730616_3840_2160_25fps.mp4` → Marta Skłodowska
8. `14734686_3840_2160_25fps.mp4` → Rafał Suchta
9. `19618462-uhd_3840_2160_30fps.mp4` → Marta Szczepaniak

## Rozmiary plików
⚠️ **Uwaga**: GitHub ma limit 100 MB na plik. Pliki video powinny być skompresowane:
- Obecny rozmiar `HeroMilena.mp4`: **465 MB** ❌ (za duży!)
- Obecny rozmiar `12217651_3840_2160_30fps.mp4`: **88 MB** ⚠️ (bliski limitu)
- Obecny rozmiar `14127300_3840_2160_60fps.mp4`: **54 MB** ⚠️

**Zalecane rozmiary**: < 50 MB per plik

## Kompresja video
Aby skompresować video do mniejszego rozmiaru zachowując jakość:

```bash
# Używając ffmpeg (zainstaluj przez: brew install ffmpeg)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k output.mp4
```

## Alternatywne rozwiązania
Jeśli pliki są za duże dla GitHub:
1. **Git LFS** (Large File Storage) - [https://git-lfs.github.com](https://git-lfs.github.com)
2. **CDN hosting** - hostowanie video na zewnętrznym serwerze (Cloudflare, AWS S3)
3. **Video streaming** - YouTube/Vimeo z embedowaniem

## Status
✅ Kod HTML/CSS gotowy - wszystkie 11 stron terapeutów ma implementację video  
⚠️ Pliki video lokalnie dostępne, ale **nie wypushowane do GitHub** (za duże)

## Deployment
Przed wdrożeniem upewnij się, że pliki video są:
1. Skompresowane do < 50 MB
2. Umieszczone w tym katalogu
3. Dostępne przez ścieżkę `Assets/HeroTerapeuta/[nazwa-pliku].mp4`
