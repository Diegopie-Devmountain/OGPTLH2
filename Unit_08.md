# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Bonus: Responsive Design](#bonus-responsive-design)
  - [Bonus: Tailwind Customization](#bonus-tailwind-customization)
  - [Bonus: Custom Hooks](#bonus-custom-hooks)
  - [Bonus: Firebase Storage \& Dummy Data](#bonus-firebase-storage--dummy-data)
  - [Bonus: PWA](#bonus-pwa)
  - [Bonus: Playwright](#bonus-playwright)
  - [Bonus: Local Storage](#bonus-local-storage)
  - [Bonus: Hosting on Render](#bonus-hosting-on-render)
  - [Bonus: Image Optimization](#bonus-image-optimization)
    - [Src Set](#src-set)
    - [Lazy Loading](#lazy-loading)
    - [Video Compression](#video-compression)
    - [Compressors](#compressors)
    - [onload](#onload)

## Bonus: Responsive Design

|  |  |
| :---: | :---: |
| Bonus: Responsive Design | [Link](https://strategiced.zoom.us/rec/share/OeWdXgEP-YIr1CfHmPdt1tdVnKZwFUIY853PzurQrNlq0XqFQbiBuHcZbNSzdJJF.xcFjOXJIGCzDP4oM?startTime=1722102300000) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: Tailwind Customization

|  |  |
| :---: | :---: |
| Recording | [Link](https://strategiced.zoom.us/rec/share/9c70az5o2VG83ztigMm1BpztHO_f2RWgFpMHLXsirWVFQRh4VnXd-NoDO_h-6CeD.PT2w3KejMyoZiILO?startTime=1724200168000) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: Custom Hooks

|  |  |
| :---: | :---: |
| Recording | [Link](https://strategiced.zoom.us/rec/share/zPQXAFJ4rBoHmTtPkpG1H5SCjC-al0XBLKZKCUmCVlybWTYRLXesSk1imXTSuFkY.P6MZxFh_btTl4Hv-?startTime=1725583927000) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: Firebase Storage & Dummy Data

|  |  |
| :---: | :---: |
| Firebase Storage | [Link](https://strategiced.zoom.us/rec/share/X1wy_IEVmJFJDFT58gGmu4U93Qzr-nEks4yiGmPJRiTitTIFAvoVV68f01-sySXZ.w9AFYSXmizEHPcpj?startTime=1725739647000) |
| Dummy Data | [Link](https://strategiced.zoom.us/rec/share/X1wy_IEVmJFJDFT58gGmu4U93Qzr-nEks4yiGmPJRiTitTIFAvoVV68f01-sySXZ.w9AFYSXmizEHPcpj?startTime=1725737901000) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: PWA

|  |  |
| :---: | :---: |
| Recording | [Link](https://strategiced.zoom.us/rec/share/WwlE8b2OhozXOnZdHmvD63rdF7g7uvSvPzg2bphI0zxpTw4DHZGJR-u_f5RuAyix.hr8zbhTbQ6GFvGmT) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: Playwright

|  |  |
| :---: | :---: |
| Recording | [Link](https://strategiced.zoom.us/rec/share/wRwlpRrETwggjIKPJnsndEwbRiWo6y5WY1uogYiHYE7vDCcn_3wxgH4SwKJqPwe7.bOesMO80hFvbL2mf) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: Local Storage

|  |  |
| :---: | :---: |
| Recording | [Link](https://strategiced.zoom.us/rec/share/67y45rvoyhj9tTSOOYbPxeFlCEVQLW24aBLKC4F87g0wocABb376HZ5xTVEJY1HX.EPeeHo7x94kXfRMK) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: Hosting on Render

|  |  |
| :---: | :---: |
| Recording | [Link](https://strategiced.zoom.us/rec/share/cH1vWYpYRGRFC9BLj6CwKUC_sGD_UV7tuoHEbs1sfBebeBndHuklMNZ8pAbdftCK.QQqq6PUOFOIwiukL) |

> [Back to Table of Contents](#table-of-contents)

## Bonus: Image Optimization

|  |  |
| :---: | :---: |
| Firebase Storage | [Link](https://strategiced.zoom.us/rec/share/wRwlpRrETwggjIKPJnsndEwbRiWo6y5WY1uogYiHYE7vDCcn_3wxgH4SwKJqPwe7.bOesMO80hFvbL2mf) |

### Src Set

[Responsive images - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

```html
<img 
src="//cozyearth.com/cdn/shop/files/1_bamboostretchknitscrunchie.jpg?v=1701099858&amp;width=1024" alt="Pomegranate/Olive/Ivory" 
srcset="//cozyearth.com/cdn/shop/files/1_bamboostretchknitscrunchie.jpg?v=1701099858&amp;width=196 196w, 
//cozyearth.com/cdn/shop/files/1_bamboostretchknitscrunchie.jpg?v=1701099858&amp;width=256 256w, 
//cozyearth.com/cdn/shop/files/1_bamboostretchknitscrunchie.jpg?v=1701099858&amp;width=384 384w, 
//cozyearth.com/cdn/shop/files/1_bamboostretchknitscrunchie.jpg?v=1701099858&amp;width=512 512w, 
//cozyearth.com/cdn/shop/files/1_bamboostretchknitscrunchie.jpg?v=1701099858&amp;width=896 896w" 
width="1024" 
height="1536" 
loading="lazy" 
class="shrink-0 snap-start relative h-full lg:w-full object-cover lg:size-full" 

sizes="(max-width: 767px) calc(50vw - 40px), 24vw">
// At 767px or less, set the widht be the value next to it,
// else, set to 800px
```

### Lazy Loading

[Lazy loading - Web performance | MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)

### Video Compression

[<video>: The Video Embed element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

### Compressors

[TinyPNG – Compress WebP, PNG and JPEG images intelligently](https://tinypng.com/)

What is webp

[An image format for the Web  |  WebP  |  Google for Developers](https://developers.google.com/speed/webp)

[Smart Image/CSS/JS Optimization Services and CDN for Websites](https://shortpixel.com/)

### onload

```html
<img src={invisImg} alt='invisible img' className='App-Invisible-Img'
    onLoad={() => { setSmallBackImg('') }}
/>
```