

export const seed_data = [
    {
        "page": 1,
        "text": "Ondes électromagnétiques\n          dans le vide\n\n\n\n               PC*/PC",
        "md": "# Ondes électromagnétiques dans le vide\n\nPC*/PC\n\n[A simplified world map showing the continents in black silhouette against a white background. The map includes North and South America, Africa, Europe, Asia, and Australia.]",
        "images": [
            {
                "name": "page_1.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "heading",
                "lvl": 1,
                "value": "Ondes électromagnétiques dans le vide",
                "md": "# Ondes électromagnétiques dans le vide",
                "bBox": {
                    "x": 71,
                    "y": 208,
                    "w": 467.61,
                    "h": 36
                }
            },
            {
                "type": "text",
                "value": "PC*/PC\n\n[A simplified world map showing the continents in black silhouette against a white background. The map includes North and South America, Africa, Europe, Asia, and Australia.]",
                "md": "PC*/PC\n\n[A simplified world map showing the continents in black silhouette against a white background. The map includes North and South America, Africa, Europe, Asia, and Australia.]",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 2,
        "text": "I – Les équations de propagations du champ EM dans le vide :\nSoit  une  distribution  (D)  de  charges  localisées  autour  d’un  point  O,  dont  les  densités  sont\nfonction du temps (exemple : une antenne métallique). Selon les équations de Maxwell-Gauss et r   et  B  variables  dans  le r\nde  Maxwell-Ampère,  cette  distribution  (D)  est  la  source  de  champs  E\ntemps qui vont s’établir dans tout le voisinage de O. Un point M de ce voisinage, bien que situé ∂r ∂t  et                 ∂r ∂t\nen  dehors  de  (D),  est  lui-même  source  de  champs  en  raison  des  termes  en                           B/\n                                                                                                                             E/\n« provenant  de  O »  qui  jouent  un  rôle  de  sources  dans  les équations  de  Maxwell-Faraday et  de\nMaxwell-Ampère. Les points P du voisinage de M sont à leur tour dans leur propre voisinage des\nsources de champs variables dans le temps …\nOn conçoit ainsi que le champ EM se propage en faisant penser à des rides se transmettant de\nproche en proche à la surface de l’eau.\n« Le couplage qui est introduit dans les équations de Maxwell par la présence des deux dérivées r ∂t et ∂ /r ∂t est à l’origine du phénomène de propagation du\npartielles par rapport au temps ∂ /B                      E\nchamp EM. »\nObtention des équations de propagation du champ EM :\nOn calcule le rotationnel de l’équation de Maxwell-Faraday :\n                                                   rot(rotEr)=   −∂∂t(rot   Br)\nOr :\n                                               rot(rotrEr)=   grad(div   Er)−∆rE\nAvec divEr=         ρ  et  rotBr=μ0r+ε0μ0∂E, il vient :  j\n                   ε0                                ∂t\n                                         grad⌈⌊ε0⌉−∆r\n                                               ⌊\n                                               ⎜ ρ  ⌋\n                                                    ⌋\n                                                    ⎝     E   = −∂t⎜∂⌈μ0r+ε0μ0\n                                                                     ⌊\n                                                                     ⌊    j          ∂E⌋∂tr⌉ ⌋\n                                                                                         ⎝\nSoit, finalement :\n                                            ∆Er−ε0μ0     ∂2rE  =   1 grad   ρ  +μ0   ∂rj\n                                                          ∂t2     ε0                 ∂t\n\n\n\nDe manière symétrique, on élimine E au profit de B en calculant le rotationnel de MA :\n                               rot(rotBr)=    grad(div   Br)−∆r=B    μ0rot   rj+ε0μ0    ∂t∂(rotEr)\nSoit :\n                                        grad( )−∆r=0  B    μ0rot   r+ε0μ0\n                                                                   j          ∂∂⌊t⌈− ∂r⌉B⌋\n                                                                                 ⌊\n                                                                                 ⎜   ∂t ⌋\n                                                                                        ⎝\nFinalement :\n                                                 ∆r−ε0μ0       ∂2Br              rj\n                                                   B           ∂t2   =−μ0rot\nDans une région sans charges ni courants (ρ                  =0et    jr =0r) :\n                                   ∆Er−ε0μ0     ∂2rE  =r0        et      ∆Br−ε0μ0      ∂2rB =  r\n                                                                                               0\n                                                 ∂t2                                   ∂t2\n\n\n\n                                                                 2",
        "md": "I – Les équations de propagations du champ EM dans le vide :\n\nSoit une distribution (D) de charges localisées autour d'un point O, dont les densités sont fonction du temps (exemple : une antenne métallique). Selon les équations de Maxwell-Gauss et de Maxwell-Ampère, cette distribution (D) est la source de champs $\\vec{E}$ et $\\vec{B}$ variables dans le temps qui vont s'établir dans tout le voisinage de O. Un point M de ce voisinage, bien que situé en dehors de (D), est lui-même source de champs en raison des termes en $\\partial \\vec{B}/\\partial t$ et $\\partial \\vec{E}/\\partial t$ « provenant de O » qui jouent un rôle de sources dans les équations de Maxwell-Faraday et de Maxwell-Ampère. Les points P du voisinage de M sont à leur tour dans leur propre voisinage des sources de champs variables dans le temps ...\n\nOn conçoit ainsi que le champ EM se propage en faisant penser à des rides se transmettant de proche en proche à la surface de l'eau.\n\n« Le couplage qui est introduit dans les équations de Maxwell par la présence des deux dérivées partielles par rapport au temps $\\partial \\vec{B}/\\partial t$ et $\\partial \\vec{E}/\\partial t$ est à l'origine du phénomène de propagation du champ EM. »\n\nObtention des équations de propagation du champ EM :\n\nOn calcule le rotationnel de l'équation de Maxwell-Faraday :\n\n$$\\vec{rot}(\\vec{rot} \\vec{E}) = -\\frac{\\partial}{\\partial t}(\\vec{rot} \\vec{B})$$\n\nOr :\n\n$$\\vec{rot}(\\vec{rot} \\vec{E}) = \\vec{grad}(div \\vec{E}) - \\Delta \\vec{E}$$\n\nAvec $div \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$ et $\\vec{rot} \\vec{B} = \\mu_0 \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}$, il vient :\n\n$$\\vec{grad}\\left(\\frac{\\rho}{\\varepsilon_0}\\right) - \\Delta \\vec{E} = -\\frac{\\partial}{\\partial t}\\left(\\mu_0 \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}\\right)$$\n\nSoit, finalement :\n\n$$\\Delta \\vec{E} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\frac{1}{\\varepsilon_0} \\vec{grad} \\rho + \\mu_0 \\frac{\\partial \\vec{j}}{\\partial t}$$\n\nDe manière symétrique, on élimine E au profit de B en calculant le rotationnel de MA :\n\n$$\\vec{rot}(\\vec{rot} \\vec{B}) = \\vec{grad}(div \\vec{B}) - \\Delta \\vec{B} = \\mu_0 \\vec{rot} \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial}{\\partial t}(\\vec{rot} \\vec{E})$$\n\nSoit :\n\n$$\\vec{grad}(0) - \\Delta \\vec{B} = \\mu_0 \\vec{rot} \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial}{\\partial t}\\left(-\\frac{\\partial \\vec{B}}{\\partial t}\\right)$$\n\nFinalement :\n\n$$\\Delta \\vec{B} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{B}}{\\partial t^2} = -\\mu_0 \\vec{rot} \\vec{j}$$\n\nDans une région sans charges ni courants ($\\rho = 0$ et $\\vec{j} = \\vec{0}$) :\n\n$$\\Delta \\vec{E} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0} \\quad et \\quad \\Delta \\vec{B} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{B}}{\\partial t^2} = \\vec{0}$$",
        "images": [
            {
                "name": "page_2.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "I – Les équations de propagations du champ EM dans le vide :\n\nSoit une distribution (D) de charges localisées autour d'un point O, dont les densités sont fonction du temps (exemple : une antenne métallique). Selon les équations de Maxwell-Gauss et de Maxwell-Ampère, cette distribution (D) est la source de champs $\\vec{E}$ et $\\vec{B}$ variables dans le temps qui vont s'établir dans tout le voisinage de O. Un point M de ce voisinage, bien que situé en dehors de (D), est lui-même source de champs en raison des termes en $\\partial \\vec{B}/\\partial t$ et $\\partial \\vec{E}/\\partial t$ « provenant de O » qui jouent un rôle de sources dans les équations de Maxwell-Faraday et de Maxwell-Ampère. Les points P du voisinage de M sont à leur tour dans leur propre voisinage des sources de champs variables dans le temps ...\n\nOn conçoit ainsi que le champ EM se propage en faisant penser à des rides se transmettant de proche en proche à la surface de l'eau.\n\n« Le couplage qui est introduit dans les équations de Maxwell par la présence des deux dérivées partielles par rapport au temps $\\partial \\vec{B}/\\partial t$ et $\\partial \\vec{E}/\\partial t$ est à l'origine du phénomène de propagation du champ EM. »\n\nObtention des équations de propagation du champ EM :\n\nOn calcule le rotationnel de l'équation de Maxwell-Faraday :\n\n$$\\vec{rot}(\\vec{rot} \\vec{E}) = -\\frac{\\partial}{\\partial t}(\\vec{rot} \\vec{B})$$\n\nOr :\n\n$$\\vec{rot}(\\vec{rot} \\vec{E}) = \\vec{grad}(div \\vec{E}) - \\Delta \\vec{E}$$\n\nAvec $div \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$ et $\\vec{rot} \\vec{B} = \\mu_0 \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}$, il vient :\n\n$$\\vec{grad}\\left(\\frac{\\rho}{\\varepsilon_0}\\right) - \\Delta \\vec{E} = -\\frac{\\partial}{\\partial t}\\left(\\mu_0 \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}\\right)$$\n\nSoit, finalement :\n\n$$\\Delta \\vec{E} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\frac{1}{\\varepsilon_0} \\vec{grad} \\rho + \\mu_0 \\frac{\\partial \\vec{j}}{\\partial t}$$\n\nDe manière symétrique, on élimine E au profit de B en calculant le rotationnel de MA :\n\n$$\\vec{rot}(\\vec{rot} \\vec{B}) = \\vec{grad}(div \\vec{B}) - \\Delta \\vec{B} = \\mu_0 \\vec{rot} \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial}{\\partial t}(\\vec{rot} \\vec{E})$$\n\nSoit :\n\n$$\\vec{grad}(0) - \\Delta \\vec{B} = \\mu_0 \\vec{rot} \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial}{\\partial t}\\left(-\\frac{\\partial \\vec{B}}{\\partial t}\\right)$$\n\nFinalement :\n\n$$\\Delta \\vec{B} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{B}}{\\partial t^2} = -\\mu_0 \\vec{rot} \\vec{j}$$\n\nDans une région sans charges ni courants ($\\rho = 0$ et $\\vec{j} = \\vec{0}$) :\n\n$$\\Delta \\vec{E} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0} \\quad et \\quad \\Delta \\vec{B} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{B}}{\\partial t^2} = \\vec{0}$$",
                "md": "I – Les équations de propagations du champ EM dans le vide :\n\nSoit une distribution (D) de charges localisées autour d'un point O, dont les densités sont fonction du temps (exemple : une antenne métallique). Selon les équations de Maxwell-Gauss et de Maxwell-Ampère, cette distribution (D) est la source de champs $\\vec{E}$ et $\\vec{B}$ variables dans le temps qui vont s'établir dans tout le voisinage de O. Un point M de ce voisinage, bien que situé en dehors de (D), est lui-même source de champs en raison des termes en $\\partial \\vec{B}/\\partial t$ et $\\partial \\vec{E}/\\partial t$ « provenant de O » qui jouent un rôle de sources dans les équations de Maxwell-Faraday et de Maxwell-Ampère. Les points P du voisinage de M sont à leur tour dans leur propre voisinage des sources de champs variables dans le temps ...\n\nOn conçoit ainsi que le champ EM se propage en faisant penser à des rides se transmettant de proche en proche à la surface de l'eau.\n\n« Le couplage qui est introduit dans les équations de Maxwell par la présence des deux dérivées partielles par rapport au temps $\\partial \\vec{B}/\\partial t$ et $\\partial \\vec{E}/\\partial t$ est à l'origine du phénomène de propagation du champ EM. »\n\nObtention des équations de propagation du champ EM :\n\nOn calcule le rotationnel de l'équation de Maxwell-Faraday :\n\n$$\\vec{rot}(\\vec{rot} \\vec{E}) = -\\frac{\\partial}{\\partial t}(\\vec{rot} \\vec{B})$$\n\nOr :\n\n$$\\vec{rot}(\\vec{rot} \\vec{E}) = \\vec{grad}(div \\vec{E}) - \\Delta \\vec{E}$$\n\nAvec $div \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$ et $\\vec{rot} \\vec{B} = \\mu_0 \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}$, il vient :\n\n$$\\vec{grad}\\left(\\frac{\\rho}{\\varepsilon_0}\\right) - \\Delta \\vec{E} = -\\frac{\\partial}{\\partial t}\\left(\\mu_0 \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial \\vec{E}}{\\partial t}\\right)$$\n\nSoit, finalement :\n\n$$\\Delta \\vec{E} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\frac{1}{\\varepsilon_0} \\vec{grad} \\rho + \\mu_0 \\frac{\\partial \\vec{j}}{\\partial t}$$\n\nDe manière symétrique, on élimine E au profit de B en calculant le rotationnel de MA :\n\n$$\\vec{rot}(\\vec{rot} \\vec{B}) = \\vec{grad}(div \\vec{B}) - \\Delta \\vec{B} = \\mu_0 \\vec{rot} \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial}{\\partial t}(\\vec{rot} \\vec{E})$$\n\nSoit :\n\n$$\\vec{grad}(0) - \\Delta \\vec{B} = \\mu_0 \\vec{rot} \\vec{j} + \\varepsilon_0 \\mu_0 \\frac{\\partial}{\\partial t}\\left(-\\frac{\\partial \\vec{B}}{\\partial t}\\right)$$\n\nFinalement :\n\n$$\\Delta \\vec{B} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{B}}{\\partial t^2} = -\\mu_0 \\vec{rot} \\vec{j}$$\n\nDans une région sans charges ni courants ($\\rho = 0$ et $\\vec{j} = \\vec{0}$) :\n\n$$\\Delta \\vec{E} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0} \\quad et \\quad \\Delta \\vec{B} - \\varepsilon_0 \\mu_0 \\frac{\\partial^2 \\vec{B}}{\\partial t^2} = \\vec{0}$$",
                "bBox": {
                    "x": 70,
                    "y": 115,
                    "w": 456.53,
                    "h": 696.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 3,
        "text": "Ces équations sont les équations de propagation du champ EM. Si l’on note s(x,y,z,t) l’une des six\ncoordonnées des champ EM (Ex,…., B,…), alors :  x\n                                      ∆s−ε0μ0         ∂2s=0\n                                                      ∂\n                                                        t2             soit       ∆s−c12      ∂2s∂t2 =0       (c12   =ε0μ0)\nC’est  l’équation  de  d’Alembert  (équation  classique  de  propagation  des  ondes,  encore  appelée\néquation  des  cordes  vibrantes)  établie  au  XVIIIème  siècle  pour  modéliser  les  vibrations  d’une\ncorde  tendue.  Les  solutions  de  cette  équation  traduisent  un  phénomène  de  propagation  de\ncélérité c (vitesse de la lumière dans le vide).\n\n* Résolution de l’équation de d’Alembert :\nOn se propose de résoudre l’équation de d’Alembert unidimensionnelle :\n                                                                       ∂2s−v12\n                                                                       ∂x2            ∂2s=\n                                                                                      ∂t2       0\nDe manière symbolique, cette équation peut s’écrire :\n                                                              ⌈v∂x\n                                                              ⌊\n                                                              ⎜     ∂   +∂t⎝.⌊∂⌉⌈v∂x⌋⎜∂  −∂t⎝∂⌉s=0 ⌋\nOn pose :\n                                                             p=t+       x          et         q=t−       x\n                                                                        v                                v\net, en considérant x et t comme des fonctions de p et de q :\n                                                          ∂   =   ∂p    ∂   +∂q      ∂   =  1⌊∂p−⌈∂       ∂  ⌉\n                                                                                                             ⌋\n                                                          ∂x      ∂x   ∂p      ∂x   ∂q      v⌊⎜          ∂q⎝⌋\n                                                             ∂   =   ∂p∂p+∂       ∂q    ∂   =  ∂p+∂    ∂q ∂\n                                                             ∂t      ∂t           ∂t  ∂q\n\n\n\nOn en déduit :\n                                                 v∂∂x+     ∂t∂  =2∂∂p             et         v∂∂x   −∂∂t   =  −2∂∂q\nL’équation de d’Alembert prend alors la forme :\n                                                                      ∂2s     =   ∂  ⌈∂s⌋\n                                                                                     ⌊∂q⎝⌉=0\n                                                                     ∂p∂q        ∂p⎜⌊       ⌋\nPar conséquent, ∂q∂s               =ϕ(q) et, si f(q) désigne une primitive de ϕ(q), alors :\n                                                        s=    f(q)+g(p)=            f(t−     x)+g(t+        x)\n                                                                                             v              v\nInterprétation physique : on considère une fonction de la forme :\n                                                                    s+(x,t)=          f(t−      x)\n                                                                                                v\nOn constate que :\n\n\n\n                                                                                   3",
        "md": "Ces équations sont les équations de propagation du champ EM. Si l'on note s(x,y,z,t) l'une des six coordonnées des champ EM (Ex,..., Bx,...), alors :\n\n$$\\Delta s - \\varepsilon_0\\mu_0 \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{soit} \\quad \\Delta s - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad (\\frac{1}{c^2} = \\varepsilon_0\\mu_0)$$\n\nC'est l'équation de d'Alembert (équation classique de propagation des ondes, encore appelée équation des cordes vibrantes) établie au XVIII<sup>ème</sup> siècle pour modéliser les vibrations d'une corde tendue. Les solutions de cette équation traduisent un phénomène de propagation de célérité c (vitesse de la lumière dans le vide).\n\n## Résolution de l'équation de d'Alembert :\n\nOn se propose de résoudre l'équation de d'Alembert unidimensionnelle :\n\n$$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nDe manière symbolique, cette équation peut s'écrire :\n\n$$(v\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial t})(v\\frac{\\partial}{\\partial x} - \\frac{\\partial}{\\partial t})s = 0$$\n\nOn pose :\n\n$$p = t + \\frac{x}{v} \\quad \\text{et} \\quad q = t - \\frac{x}{v}$$\n\net, en considérant x et t comme des fonctions de p et de q :\n\n$$\\frac{\\partial}{\\partial x} = \\frac{\\partial p}{\\partial x} \\frac{\\partial}{\\partial p} + \\frac{\\partial q}{\\partial x} \\frac{\\partial}{\\partial q} = \\frac{1}{v}(\\frac{\\partial}{\\partial p} - \\frac{\\partial}{\\partial q})$$\n\n$$\\frac{\\partial}{\\partial t} = \\frac{\\partial p}{\\partial t} \\frac{\\partial}{\\partial p} + \\frac{\\partial q}{\\partial t} \\frac{\\partial}{\\partial q} = \\frac{\\partial}{\\partial p} + \\frac{\\partial}{\\partial q}$$\n\nOn en déduit :\n\n$$v\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial t} = 2\\frac{\\partial}{\\partial p} \\quad \\text{et} \\quad v\\frac{\\partial}{\\partial x} - \\frac{\\partial}{\\partial t} = -2\\frac{\\partial}{\\partial q}$$\n\nL'équation de d'Alembert prend alors la forme :\n\n$$\\frac{\\partial^2 s}{\\partial p \\partial q} = \\frac{\\partial}{\\partial p}(\\frac{\\partial s}{\\partial q}) = 0$$\n\nPar conséquent, $\\frac{\\partial s}{\\partial q} = \\varphi(q)$ et, si f(q) désigne une primitive de $\\varphi(q)$, alors :\n\n$$s = f(q) + g(p) = f(t - \\frac{x}{v}) + g(t + \\frac{x}{v})$$\n\nInterprétation physique : on considère une fonction de la forme :\n\n$$s_+(x,t) = f(t - \\frac{x}{v})$$\n\nOn constate que :",
        "images": [
            {
                "name": "page_3.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "Ces équations sont les équations de propagation du champ EM. Si l'on note s(x,y,z,t) l'une des six coordonnées des champ EM (Ex,..., Bx,...), alors :\n\n$$\\Delta s - \\varepsilon_0\\mu_0 \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{soit} \\quad \\Delta s - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad (\\frac{1}{c^2} = \\varepsilon_0\\mu_0)$$\n\nC'est l'équation de d'Alembert (équation classique de propagation des ondes, encore appelée équation des cordes vibrantes) établie au XVIII<sup>ème</sup> siècle pour modéliser les vibrations d'une corde tendue. Les solutions de cette équation traduisent un phénomène de propagation de célérité c (vitesse de la lumière dans le vide).",
                "md": "Ces équations sont les équations de propagation du champ EM. Si l'on note s(x,y,z,t) l'une des six coordonnées des champ EM (Ex,..., Bx,...), alors :\n\n$$\\Delta s - \\varepsilon_0\\mu_0 \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{soit} \\quad \\Delta s - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad (\\frac{1}{c^2} = \\varepsilon_0\\mu_0)$$\n\nC'est l'équation de d'Alembert (équation classique de propagation des ondes, encore appelée équation des cordes vibrantes) établie au XVIII<sup>ème</sup> siècle pour modéliser les vibrations d'une corde tendue. Les solutions de cette équation traduisent un phénomène de propagation de célérité c (vitesse de la lumière dans le vide).",
                "bBox": {
                    "x": 239,
                    "y": 98,
                    "w": 129.44,
                    "h": 637.98
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Résolution de l'équation de d'Alembert :",
                "md": "## Résolution de l'équation de d'Alembert :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "On se propose de résoudre l'équation de d'Alembert unidimensionnelle :\n\n$$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nDe manière symbolique, cette équation peut s'écrire :\n\n$$(v\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial t})(v\\frac{\\partial}{\\partial x} - \\frac{\\partial}{\\partial t})s = 0$$\n\nOn pose :\n\n$$p = t + \\frac{x}{v} \\quad \\text{et} \\quad q = t - \\frac{x}{v}$$\n\net, en considérant x et t comme des fonctions de p et de q :\n\n$$\\frac{\\partial}{\\partial x} = \\frac{\\partial p}{\\partial x} \\frac{\\partial}{\\partial p} + \\frac{\\partial q}{\\partial x} \\frac{\\partial}{\\partial q} = \\frac{1}{v}(\\frac{\\partial}{\\partial p} - \\frac{\\partial}{\\partial q})$$\n\n$$\\frac{\\partial}{\\partial t} = \\frac{\\partial p}{\\partial t} \\frac{\\partial}{\\partial p} + \\frac{\\partial q}{\\partial t} \\frac{\\partial}{\\partial q} = \\frac{\\partial}{\\partial p} + \\frac{\\partial}{\\partial q}$$\n\nOn en déduit :\n\n$$v\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial t} = 2\\frac{\\partial}{\\partial p} \\quad \\text{et} \\quad v\\frac{\\partial}{\\partial x} - \\frac{\\partial}{\\partial t} = -2\\frac{\\partial}{\\partial q}$$\n\nL'équation de d'Alembert prend alors la forme :\n\n$$\\frac{\\partial^2 s}{\\partial p \\partial q} = \\frac{\\partial}{\\partial p}(\\frac{\\partial s}{\\partial q}) = 0$$\n\nPar conséquent, $\\frac{\\partial s}{\\partial q} = \\varphi(q)$ et, si f(q) désigne une primitive de $\\varphi(q)$, alors :\n\n$$s = f(q) + g(p) = f(t - \\frac{x}{v}) + g(t + \\frac{x}{v})$$\n\nInterprétation physique : on considère une fonction de la forme :\n\n$$s_+(x,t) = f(t - \\frac{x}{v})$$\n\nOn constate que :",
                "md": "On se propose de résoudre l'équation de d'Alembert unidimensionnelle :\n\n$$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nDe manière symbolique, cette équation peut s'écrire :\n\n$$(v\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial t})(v\\frac{\\partial}{\\partial x} - \\frac{\\partial}{\\partial t})s = 0$$\n\nOn pose :\n\n$$p = t + \\frac{x}{v} \\quad \\text{et} \\quad q = t - \\frac{x}{v}$$\n\net, en considérant x et t comme des fonctions de p et de q :\n\n$$\\frac{\\partial}{\\partial x} = \\frac{\\partial p}{\\partial x} \\frac{\\partial}{\\partial p} + \\frac{\\partial q}{\\partial x} \\frac{\\partial}{\\partial q} = \\frac{1}{v}(\\frac{\\partial}{\\partial p} - \\frac{\\partial}{\\partial q})$$\n\n$$\\frac{\\partial}{\\partial t} = \\frac{\\partial p}{\\partial t} \\frac{\\partial}{\\partial p} + \\frac{\\partial q}{\\partial t} \\frac{\\partial}{\\partial q} = \\frac{\\partial}{\\partial p} + \\frac{\\partial}{\\partial q}$$\n\nOn en déduit :\n\n$$v\\frac{\\partial}{\\partial x} + \\frac{\\partial}{\\partial t} = 2\\frac{\\partial}{\\partial p} \\quad \\text{et} \\quad v\\frac{\\partial}{\\partial x} - \\frac{\\partial}{\\partial t} = -2\\frac{\\partial}{\\partial q}$$\n\nL'équation de d'Alembert prend alors la forme :\n\n$$\\frac{\\partial^2 s}{\\partial p \\partial q} = \\frac{\\partial}{\\partial p}(\\frac{\\partial s}{\\partial q}) = 0$$\n\nPar conséquent, $\\frac{\\partial s}{\\partial q} = \\varphi(q)$ et, si f(q) désigne une primitive de $\\varphi(q)$, alors :\n\n$$s = f(q) + g(p) = f(t - \\frac{x}{v}) + g(t + \\frac{x}{v})$$\n\nInterprétation physique : on considère une fonction de la forme :\n\n$$s_+(x,t) = f(t - \\frac{x}{v})$$\n\nOn constate que :",
                "bBox": {
                    "x": 239,
                    "y": 98,
                    "w": 129.44,
                    "h": 637.98
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 4,
        "text": "                                                f(t   −  x)=     f(t+    ∆t−    x+v∆x)\n                                                         v\npour tout couple ∆x et ∆t vérifiant : ∆x=v∆t. Ainsi, s+(x,t) représente un signal qui se propage\nsans déformation à la vitesse v le long de l’axe (Ox) dans le sens positif.\n\n\n\n                                    s+(x,t)=     f(t−    x)\n                                                         v\n\n\n\n                                                                ∆x=     v∆t\n\n\n\n                                    O          Instant                            Instant               x\n                                                   t                               t+∆t ∆\n                                                                                         ∆∆\n                        onde progressive plane                                                            interrupteur\n                             fls 0)\n                                                                              Mx W\n\n\n\n\n\n                                          Référence : cabri géomètre (Y.Cortial)\n\nLa solution s−(x,t)=             f (t+   x) représente un signal qui se propage sans déformation à la vitesse\n                                         v\nv le long de l’axe (Ox) dans le sens négatif.\nOn se propose maintenant de résoudre l’équation de d’Alembert tridimensionnelle :\n\n\n\n                                                                     4",
        "md": "$$f(t - \\frac{x}{v}) = f(t + \\Delta t - \\frac{x + \\Delta x}{v})$$\n\npour tout couple Δx et Δt vérifiant : Δx = vΔt. Ainsi, s+(x,t) représente un signal qui se propage sans déformation à la vitesse v le long de l'axe (Ox) dans le sens positif.\n\n$$s_+(x,t) = f(t - \\frac{x}{v})$$\n\n$$\\Delta x = v\\Delta t$$\n\n```mermaid\ngraph LR\n    O --> |Instant t| X\n    X --> |Instant t+Δt| Y\n    \n    subgraph \"onde progressive plane\"\n        A[f(s,0)]\n    end\n```\n\nRéférence : cabri géomètre (Y.Cortial)\n\nLa solution $$s_-(x,t) = f(t + \\frac{x}{v})$$ représente un signal qui se propage sans déformation à la vitesse v le long de l'axe (Ox) dans le sens négatif.\n\nOn se propose maintenant de résoudre l'équation de d'Alembert tridimensionnelle :\n\n4",
        "images": [
            {
                "name": "img_p3_1.png",
                "height": 370,
                "width": 743,
                "x": 140.16,
                "y": 303.5996,
                "original_width": 743,
                "original_height": 370,
                "ocr": [
                    {
                        "x": 23,
                        "y": 5,
                        "w": 114,
                        "h": 16,
                        "confidence": "0.844270610842768",
                        "text": "onde progressive plane"
                    },
                    {
                        "x": 656,
                        "y": 24,
                        "w": 57,
                        "h": 14,
                        "confidence": "0.9947275589365151",
                        "text": "interrupteur"
                    },
                    {
                        "x": 59,
                        "y": 211,
                        "w": 28,
                        "h": 14,
                        "confidence": "0.27081629575152405",
                        "text": "fls 0)"
                    },
                    {
                        "x": 435,
                        "y": 233,
                        "w": 22,
                        "h": 18,
                        "confidence": "0.3416019678115845",
                        "text": "Mx W"
                    }
                ]
            },
            {
                "name": "img_p3_2.png",
                "height": 327,
                "width": 661,
                "x": 132,
                "y": 466.4396,
                "original_width": 661,
                "original_height": 327
            },
            {
                "name": "page_4.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$f(t - \\frac{x}{v}) = f(t + \\Delta t - \\frac{x + \\Delta x}{v})$$\n\npour tout couple Δx et Δt vérifiant : Δx = vΔt. Ainsi, s+(x,t) représente un signal qui se propage sans déformation à la vitesse v le long de l'axe (Ox) dans le sens positif.\n\n$$s_+(x,t) = f(t - \\frac{x}{v})$$\n\n$$\\Delta x = v\\Delta t$$\n\n```mermaid\ngraph LR\n    O --> |Instant t| X\n    X --> |Instant t+Δt| Y\n    \n    subgraph \"onde progressive plane\"\n        A[f(s,0)]\n    end\n```\n\nRéférence : cabri géomètre (Y.Cortial)\n\nLa solution $$s_-(x,t) = f(t + \\frac{x}{v})$$ représente un signal qui se propage sans déformation à la vitesse v le long de l'axe (Ox) dans le sens négatif.\n\nOn se propose maintenant de résoudre l'équation de d'Alembert tridimensionnelle :\n\n4",
                "md": "$$f(t - \\frac{x}{v}) = f(t + \\Delta t - \\frac{x + \\Delta x}{v})$$\n\npour tout couple Δx et Δt vérifiant : Δx = vΔt. Ainsi, s+(x,t) représente un signal qui se propage sans déformation à la vitesse v le long de l'axe (Ox) dans le sens positif.\n\n$$s_+(x,t) = f(t - \\frac{x}{v})$$\n\n$$\\Delta x = v\\Delta t$$\n\n```mermaid\ngraph LR\n    O --> |Instant t| X\n    X --> |Instant t+Δt| Y\n    \n    subgraph \"onde progressive plane\"\n        A[f(s,0)]\n    end\n```\n\nRéférence : cabri géomètre (Y.Cortial)\n\nLa solution $$s_-(x,t) = f(t + \\frac{x}{v})$$ représente un signal qui se propage sans déformation à la vitesse v le long de l'axe (Ox) dans le sens négatif.\n\nOn se propose maintenant de résoudre l'équation de d'Alembert tridimensionnelle :\n\n4",
                "bBox": {
                    "x": 149.91,
                    "y": 90,
                    "w": 266.93,
                    "h": 721.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 5,
        "text": "                                        ∆s−v21     ∂2s  =0         avecs(r,t)=s(x,y,z,t) r\n                                                   ∂t2\nOn vérifie que des fonctions de la forme :\n                  sx±(x,y,z,t),    =  f(tm  x)    ;  sy±(x,y,z,t)=,      f(tm   y)   ;   s,±(x,y,z,t)=z  f(tm  z)\n                                            v                                   v                              v\nsont  solution  de  l’équation  tridimensionnelle  (ces  solutions  sont  appelées  ondes  planes  de\ndirections de propagations respectives r ,ury                     rz, dans le sens positif ou négatif).\n                                                       ux      etu\nDes ondes sphériques sont également solution de l’équation de d’Alembert tridimensionnelle : on\ncherche, par exemple, des solutions à symétrie sphérique s(r,t). En utilisant la forme du laplacien\nen coordonnées sphériques, il vient :\n                                                      1  ∂2  (rs)−    1  ∂2s=\n                                                                         ∂       0\n                                                      r ∂r2          v2   t2\nSoit encore :\n                                                     ∂2   (rs)−   1   ∂2  (rs)=0\n                                                     ∂r2          v2 ∂t2\nOn  constate  alors  que  la  fonction  rs(r,t)  est  solution  de  l’équation  unidimensionnelle  de\nd’Alembert. Par conséquent :\n                                                rs(r,t)=      f(t  −vr)+     g(t+    r)\n                                                                                     v\nSoit :\n                                              s(r,t)=     1  f(t  −vr)+     1  g(t  +  r)\n                                                          r                 r          v\nLes deux termes de cette somme représentent des ondes sphériques respectivement divergente et\nconvergente.  On  constate  que  le  signal  ne  se  propage  pas  sans  déformation  en  raison  de\nl’affaiblissement exprimé par le facteur 1 / r.\nOn choisit, dans la suite :\nPour une onde plane s(z,t), l’équation de d’Alembert devient :\n                                      ∂2s−ε0μ0\n                                      ∂\n                                       z2           ∂2s=0\n                                                    ∂\n                                                      t2          ou      ∂2s−c12\n                                                                          ∂\n                                                                           z2        ∂2s\n                                                                                     ∂t2   =0\nCette fonction s(z,t) peut s’écrire sous la forme :\n                                                   s(z,t)=    f⌊⌈ −c⎝\n                                                               ⎜t    z⌉+g⌊t⌋⌈ +c⎝\n                                                                            ⎜     z⌉ ⌋\n\nCompléments (Ondes stationnaires) :\nOn cherche des solutions de l’équation de d’Alembert de la forme (méthode de séparation des\nvariables) :\n                                                         s(x,t)=    f(x)g(t)\nEn substituant dans l’équation de d’Alembert :\n\n\n\n                                                                   5",
        "md": "$$\\Delta s - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{avec } s(\\vec{r},t) = s(x,y,z,t)$$\n\nOn vérifie que des fonctions de la forme :\n\n$$s_{x\\pm}(x,y,z,t) = f(t \\mp \\frac{x}{v}) \\quad ; \\quad s_{y\\pm}(x,y,z,t) = f(t \\mp \\frac{y}{v}) \\quad ; \\quad s_{z\\pm}(x,y,z,t) = f(t \\mp \\frac{z}{v})$$\n\nsont solution de l'équation tridimensionnelle (ces solutions sont appelées ondes planes de directions de propagations respectives $\\vec{u_x}$, $\\vec{u_y}$ et $\\vec{u_z}$, dans le sens positif ou négatif).\n\nDes ondes sphériques sont également solution de l'équation de d'Alembert tridimensionnelle : on cherche, par exemple, des solutions à symétrie sphérique s(r,t). En utilisant la forme du laplacien en coordonnées sphériques, il vient :\n\n$$\\frac{1}{r} \\frac{\\partial^2}{\\partial r^2}(rs) - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nSoit encore :\n\n$$\\frac{\\partial^2}{\\partial r^2}(rs) - \\frac{1}{v^2} \\frac{\\partial^2}{\\partial t^2}(rs) = 0$$\n\nOn constate alors que la fonction rs(r,t) est solution de l'équation unidimensionnelle de d'Alembert. Par conséquent :\n\n$$rs(r,t) = f(t - \\frac{r}{v}) + g(t + \\frac{r}{v})$$\n\nSoit :\n\n$$s(r,t) = \\frac{1}{r} f(t - \\frac{r}{v}) + \\frac{1}{r} g(t + \\frac{r}{v})$$\n\nLes deux termes de cette somme représentent des ondes sphériques respectivement divergente et convergente. On constate que le signal ne se propage pas sans déformation en raison de l'affaiblissement exprimé par le facteur 1 / r.\n\nOn choisit, dans la suite :\n\nPour une onde plane s(z,t), l'équation de d'Alembert devient :\n\n$$\\frac{\\partial^2 s}{\\partial z^2} - \\varepsilon_0\\mu_0 \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{ou} \\quad \\frac{\\partial^2 s}{\\partial z^2} - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nCette fonction s(z,t) peut s'écrire sous la forme :\n\n$$s(z,t) = f\\left(t - \\frac{z}{c}\\right) + g\\left(t + \\frac{z}{c}\\right)$$\n\nCompléments (Ondes stationnaires) :\n\nOn cherche des solutions de l'équation de d'Alembert de la forme (méthode de séparation des variables) :\n\n$$s(x,t) = f(x) g(t)$$\n\nEn substituant dans l'équation de d'Alembert :",
        "images": [
            {
                "name": "page_5.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$\\Delta s - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{avec } s(\\vec{r},t) = s(x,y,z,t)$$\n\nOn vérifie que des fonctions de la forme :\n\n$$s_{x\\pm}(x,y,z,t) = f(t \\mp \\frac{x}{v}) \\quad ; \\quad s_{y\\pm}(x,y,z,t) = f(t \\mp \\frac{y}{v}) \\quad ; \\quad s_{z\\pm}(x,y,z,t) = f(t \\mp \\frac{z}{v})$$\n\nsont solution de l'équation tridimensionnelle (ces solutions sont appelées ondes planes de directions de propagations respectives $\\vec{u_x}$, $\\vec{u_y}$ et $\\vec{u_z}$, dans le sens positif ou négatif).\n\nDes ondes sphériques sont également solution de l'équation de d'Alembert tridimensionnelle : on cherche, par exemple, des solutions à symétrie sphérique s(r,t). En utilisant la forme du laplacien en coordonnées sphériques, il vient :\n\n$$\\frac{1}{r} \\frac{\\partial^2}{\\partial r^2}(rs) - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nSoit encore :\n\n$$\\frac{\\partial^2}{\\partial r^2}(rs) - \\frac{1}{v^2} \\frac{\\partial^2}{\\partial t^2}(rs) = 0$$\n\nOn constate alors que la fonction rs(r,t) est solution de l'équation unidimensionnelle de d'Alembert. Par conséquent :\n\n$$rs(r,t) = f(t - \\frac{r}{v}) + g(t + \\frac{r}{v})$$\n\nSoit :\n\n$$s(r,t) = \\frac{1}{r} f(t - \\frac{r}{v}) + \\frac{1}{r} g(t + \\frac{r}{v})$$\n\nLes deux termes de cette somme représentent des ondes sphériques respectivement divergente et convergente. On constate que le signal ne se propage pas sans déformation en raison de l'affaiblissement exprimé par le facteur 1 / r.\n\nOn choisit, dans la suite :\n\nPour une onde plane s(z,t), l'équation de d'Alembert devient :\n\n$$\\frac{\\partial^2 s}{\\partial z^2} - \\varepsilon_0\\mu_0 \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{ou} \\quad \\frac{\\partial^2 s}{\\partial z^2} - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nCette fonction s(z,t) peut s'écrire sous la forme :\n\n$$s(z,t) = f\\left(t - \\frac{z}{c}\\right) + g\\left(t + \\frac{z}{c}\\right)$$\n\nCompléments (Ondes stationnaires) :\n\nOn cherche des solutions de l'équation de d'Alembert de la forme (méthode de séparation des variables) :\n\n$$s(x,t) = f(x) g(t)$$\n\nEn substituant dans l'équation de d'Alembert :",
                "md": "$$\\Delta s - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{avec } s(\\vec{r},t) = s(x,y,z,t)$$\n\nOn vérifie que des fonctions de la forme :\n\n$$s_{x\\pm}(x,y,z,t) = f(t \\mp \\frac{x}{v}) \\quad ; \\quad s_{y\\pm}(x,y,z,t) = f(t \\mp \\frac{y}{v}) \\quad ; \\quad s_{z\\pm}(x,y,z,t) = f(t \\mp \\frac{z}{v})$$\n\nsont solution de l'équation tridimensionnelle (ces solutions sont appelées ondes planes de directions de propagations respectives $\\vec{u_x}$, $\\vec{u_y}$ et $\\vec{u_z}$, dans le sens positif ou négatif).\n\nDes ondes sphériques sont également solution de l'équation de d'Alembert tridimensionnelle : on cherche, par exemple, des solutions à symétrie sphérique s(r,t). En utilisant la forme du laplacien en coordonnées sphériques, il vient :\n\n$$\\frac{1}{r} \\frac{\\partial^2}{\\partial r^2}(rs) - \\frac{1}{v^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nSoit encore :\n\n$$\\frac{\\partial^2}{\\partial r^2}(rs) - \\frac{1}{v^2} \\frac{\\partial^2}{\\partial t^2}(rs) = 0$$\n\nOn constate alors que la fonction rs(r,t) est solution de l'équation unidimensionnelle de d'Alembert. Par conséquent :\n\n$$rs(r,t) = f(t - \\frac{r}{v}) + g(t + \\frac{r}{v})$$\n\nSoit :\n\n$$s(r,t) = \\frac{1}{r} f(t - \\frac{r}{v}) + \\frac{1}{r} g(t + \\frac{r}{v})$$\n\nLes deux termes de cette somme représentent des ondes sphériques respectivement divergente et convergente. On constate que le signal ne se propage pas sans déformation en raison de l'affaiblissement exprimé par le facteur 1 / r.\n\nOn choisit, dans la suite :\n\nPour une onde plane s(z,t), l'équation de d'Alembert devient :\n\n$$\\frac{\\partial^2 s}{\\partial z^2} - \\varepsilon_0\\mu_0 \\frac{\\partial^2 s}{\\partial t^2} = 0 \\quad \\text{ou} \\quad \\frac{\\partial^2 s}{\\partial z^2} - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nCette fonction s(z,t) peut s'écrire sous la forme :\n\n$$s(z,t) = f\\left(t - \\frac{z}{c}\\right) + g\\left(t + \\frac{z}{c}\\right)$$\n\nCompléments (Ondes stationnaires) :\n\nOn cherche des solutions de l'équation de d'Alembert de la forme (méthode de séparation des variables) :\n\n$$s(x,t) = f(x) g(t)$$\n\nEn substituant dans l'équation de d'Alembert :",
                "bBox": {
                    "x": 70,
                    "y": 84,
                    "w": 456.57,
                    "h": 494.01
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 6,
        "text": "                                                          ∂2s−c12\n                                                          ∂\n                                                            x2        ∂2s∂t2=0\nIl vient :\n                                                    f\"(x)g(t)−c12      f(x)&&(t)=0 g\nD’où :\n                                                   1    f\"(x)=     1   &&(t)\n                                                                       g    =cste=K\n                                                 f(x)             c2   g(t)\nOn obtient ainsi deux équations différentielles :\n                                           1    f\"(x)=K              et           1   g(&&t)=K\n                                         f(x)                                    c2   g(t)\nOu encore :\n                                     f\"(x)−Kf(x)=0                  et        g(t)−c2Kg(t)=0\n                                                                              &&\nSi K > 0, la solution de la deuxième équation différentielle est de la forme :\n                                                     g(t)=Aec      Kt  +Be−c     K  t\nCette  solution  est  à  rejeter :  en  effet,  elle  correspond  soit  à  une  solution  divergente  soit  à  une\nsolution transitoire.\nDans la suite, on suppose K < 0 ; alors, en posant −c2K                         =ω 2 :\n                                                         g()=t   Acos(ω −ϕ)t\nLa 1ère équation donne alors :\n                                f\"(x)+ω2c2     f(x)=0            soit          f(x)=   Bcos⌊c⌈ω    x−ψ⌋⌉\n                                                                                              ⎜          ⎝\nLa solution globale de l’équation de d’Alembert est alors :\n                                               s(x,t)=Ccos⌊c⌈ω       x−ψ⌉cos(ωt−ϕ) ⌋\n                                                                ⎜          ⎝\n\n\n\nOn pose dans la suite k=             ω, alors :\n                                     c\n                                                s(x,t)=Ccos(kx−ψ)cos(ωt−ϕ)\nCe  type  de  solutions,  appelé  onde  plane  stationnaire  est  très  différent  d’une  onde  plane\nprogressive :  les  dépendances  spatiale  et  temporelle  interviennent  séparément ;  la  dépendance\nspatiale intervient dans l’amplitude de l’oscillation temporelle et non plus dans la phase, de telle\nsorte que tous les points de la corde vibrent en phase ou en opposition de phase.\nL’allure de la corde à différents instants est représentée sur la figure suivante. Certains points de\nla corde sont fixes et sont appelés nœuds de vibrations ; d’autres ont une amplitude de vibration\nmaximale et sont appelés ventres de vibrations.\n\n\n\n                                                                    6",
        "md": "$$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nIl vient :\n\n$$f''(x)g(t) - \\frac{1}{c^2} f(x)\\ddot{g}(t) = 0$$\n\nD'où :\n\n$$\\frac{1}{f(x)} f''(x) = \\frac{1}{c^2} \\frac{\\ddot{g}(t)}{g(t)} = cste = K$$\n\nOn obtient ainsi deux équations différentielles :\n\n$$\\frac{1}{f(x)} f''(x) = K \\quad et \\quad \\frac{1}{c^2} \\frac{\\ddot{g}(t)}{g(t)} = K$$\n\nOu encore :\n\n$$f''(x) - Kf(x) = 0 \\quad et \\quad \\ddot{g}(t) - c^2 Kg(t) = 0$$\n\nSi K > 0, la solution de la deuxième équation différentielle est de la forme :\n\n$$g(t) = Ae^{c\\sqrt{K}t} + Be^{-c\\sqrt{K}t}$$\n\nCette solution est à rejeter : en effet, elle correspond soit à une solution divergente soit à une solution transitoire.\n\nDans la suite, on suppose K < 0 ; alors, en posant $-c^2K = \\omega^2$ :\n\n$$g(t) = A \\cos(\\omega t - \\varphi)$$\n\nLa 1ère équation donne alors :\n\n$$f''(x) + \\frac{\\omega^2}{c^2} f(x) = 0 \\quad soit \\quad f(x) = B \\cos\\left(\\frac{\\omega}{c}x - \\psi\\right)$$\n\nLa solution globale de l'équation de d'Alembert est alors :\n\n$$s(x,t) = C \\cos\\left(\\frac{\\omega}{c}x - \\psi\\right) \\cos(\\omega t - \\varphi)$$\n\nOn pose dans la suite $k = \\frac{\\omega}{c}$, alors :\n\n$$s(x,t) = C \\cos(kx - \\psi) \\cos(\\omega t - \\varphi)$$\n\nCe type de solutions, appelé onde plane stationnaire est très différent d'une onde plane progressive : les dépendances spatiale et temporelle interviennent séparément ; la dépendance spatiale intervient dans l'amplitude de l'oscillation temporelle et non plus dans la phase, de telle sorte que tous les points de la corde vibrent en phase ou en opposition de phase.\n\nL'allure de la corde à différents instants est représentée sur la figure suivante. Certains points de la corde sont fixes et sont appelés nœuds de vibrations ; d'autres ont une amplitude de vibration maximale et sont appelés ventres de vibrations.\n\n6",
        "images": [
            {
                "name": "page_6.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nIl vient :\n\n$$f''(x)g(t) - \\frac{1}{c^2} f(x)\\ddot{g}(t) = 0$$\n\nD'où :\n\n$$\\frac{1}{f(x)} f''(x) = \\frac{1}{c^2} \\frac{\\ddot{g}(t)}{g(t)} = cste = K$$\n\nOn obtient ainsi deux équations différentielles :\n\n$$\\frac{1}{f(x)} f''(x) = K \\quad et \\quad \\frac{1}{c^2} \\frac{\\ddot{g}(t)}{g(t)} = K$$\n\nOu encore :\n\n$$f''(x) - Kf(x) = 0 \\quad et \\quad \\ddot{g}(t) - c^2 Kg(t) = 0$$\n\nSi K > 0, la solution de la deuxième équation différentielle est de la forme :\n\n$$g(t) = Ae^{c\\sqrt{K}t} + Be^{-c\\sqrt{K}t}$$\n\nCette solution est à rejeter : en effet, elle correspond soit à une solution divergente soit à une solution transitoire.\n\nDans la suite, on suppose K < 0 ; alors, en posant $-c^2K = \\omega^2$ :\n\n$$g(t) = A \\cos(\\omega t - \\varphi)$$\n\nLa 1ère équation donne alors :\n\n$$f''(x) + \\frac{\\omega^2}{c^2} f(x) = 0 \\quad soit \\quad f(x) = B \\cos\\left(\\frac{\\omega}{c}x - \\psi\\right)$$\n\nLa solution globale de l'équation de d'Alembert est alors :\n\n$$s(x,t) = C \\cos\\left(\\frac{\\omega}{c}x - \\psi\\right) \\cos(\\omega t - \\varphi)$$\n\nOn pose dans la suite $k = \\frac{\\omega}{c}$, alors :\n\n$$s(x,t) = C \\cos(kx - \\psi) \\cos(\\omega t - \\varphi)$$\n\nCe type de solutions, appelé onde plane stationnaire est très différent d'une onde plane progressive : les dépendances spatiale et temporelle interviennent séparément ; la dépendance spatiale intervient dans l'amplitude de l'oscillation temporelle et non plus dans la phase, de telle sorte que tous les points de la corde vibrent en phase ou en opposition de phase.\n\nL'allure de la corde à différents instants est représentée sur la figure suivante. Certains points de la corde sont fixes et sont appelés nœuds de vibrations ; d'autres ont une amplitude de vibration maximale et sont appelés ventres de vibrations.\n\n6",
                "md": "$$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0$$\n\nIl vient :\n\n$$f''(x)g(t) - \\frac{1}{c^2} f(x)\\ddot{g}(t) = 0$$\n\nD'où :\n\n$$\\frac{1}{f(x)} f''(x) = \\frac{1}{c^2} \\frac{\\ddot{g}(t)}{g(t)} = cste = K$$\n\nOn obtient ainsi deux équations différentielles :\n\n$$\\frac{1}{f(x)} f''(x) = K \\quad et \\quad \\frac{1}{c^2} \\frac{\\ddot{g}(t)}{g(t)} = K$$\n\nOu encore :\n\n$$f''(x) - Kf(x) = 0 \\quad et \\quad \\ddot{g}(t) - c^2 Kg(t) = 0$$\n\nSi K > 0, la solution de la deuxième équation différentielle est de la forme :\n\n$$g(t) = Ae^{c\\sqrt{K}t} + Be^{-c\\sqrt{K}t}$$\n\nCette solution est à rejeter : en effet, elle correspond soit à une solution divergente soit à une solution transitoire.\n\nDans la suite, on suppose K < 0 ; alors, en posant $-c^2K = \\omega^2$ :\n\n$$g(t) = A \\cos(\\omega t - \\varphi)$$\n\nLa 1ère équation donne alors :\n\n$$f''(x) + \\frac{\\omega^2}{c^2} f(x) = 0 \\quad soit \\quad f(x) = B \\cos\\left(\\frac{\\omega}{c}x - \\psi\\right)$$\n\nLa solution globale de l'équation de d'Alembert est alors :\n\n$$s(x,t) = C \\cos\\left(\\frac{\\omega}{c}x - \\psi\\right) \\cos(\\omega t - \\varphi)$$\n\nOn pose dans la suite $k = \\frac{\\omega}{c}$, alors :\n\n$$s(x,t) = C \\cos(kx - \\psi) \\cos(\\omega t - \\varphi)$$\n\nCe type de solutions, appelé onde plane stationnaire est très différent d'une onde plane progressive : les dépendances spatiale et temporelle interviennent séparément ; la dépendance spatiale intervient dans l'amplitude de l'oscillation temporelle et non plus dans la phase, de telle sorte que tous les points de la corde vibrent en phase ou en opposition de phase.\n\nL'allure de la corde à différents instants est représentée sur la figure suivante. Certains points de la corde sont fixes et sont appelés nœuds de vibrations ; d'autres ont une amplitude de vibration maximale et sont appelés ventres de vibrations.\n\n6",
                "bBox": {
                    "x": 193,
                    "y": 145,
                    "w": 177.33,
                    "h": 666.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 7,
        "text": "                               ventre\n                             i =0\n                             { =1                                                                               A                   A\n                             i =2                                                                               4                   2\n                             i=3\n                            { =4\n                            { =5\n                            i = 6\n                            i =7\n                           i =8\n                            i=9\n                           i =10                                                                                      2\n                                       noeud\nPosition des nœuds : elle s’obtient en écrivant que :\n                                                          cos(kx−ψ)=0                         soit             kxn    −ψ     =(2n+1)2π\nSoit, avec k              =   2π      :\n                               λ\n                                                                                      xn    =   2n+1λ +ψ\n                                                                                                    4               k\nLa distance entre deux nœuds successifs est égale à λ .  2\nPosition des ventres : elle s’obtient en écrivant que :\n                                                               cos(kx−ψ)=±1                           soit            kxv    −ψ      =nπ\nSoit :\n                                                                                          xv    = 2nλ +ψ\n                                                                                                               k\nLa distance entre deux ventres successifs est égale à λ .  2\nLa distance entre un nœud et un ventre successif est égale à λ .  4\n\nII – Ondes planes EM dans le vide :\n                1 – Ondes planes électromagnétiques :\nUne  onde  plane  EM  de  direction  de  propagation  zr  et  B sont des fonctions de la forme : r               ur   est  une  structure  du  champ  EM  dans\nlaquelle les coordonnées des champs  E\n                                                                                       s(z,t)=         f⌊⌈ −c⎝\n                                                                                                         ⎜t      z⌉ ⌋\n                                                                                                      7",
        "md": "\nventre\ni = 0\ni = 1\ni = 2                                λ/4    λ/2\ni = 3\ni = 4\ni = 5\ni = 6                                       λ/2\ni = 7\ni = 8\ni = 9\ni = 10\nnoeud\n\nPosition des nœuds : elle s'obtient en écrivant que :\n\n$$\\cos(kx-\\psi) = 0 \\quad \\text{soit} \\quad kx_n - \\psi = (2n+1)\\frac{\\pi}{2}$$\n\nSoit, avec $k = \\frac{2\\pi}{\\lambda}$ :\n\n$$x_n = \\frac{2n+1}{4}\\lambda + \\frac{\\psi}{k}$$\n\nLa distance entre deux nœuds successifs est égale à $\\frac{\\lambda}{2}$.\n\nPosition des ventres : elle s'obtient en écrivant que :\n\n$$\\cos(kx-\\psi) = \\pm1 \\quad \\text{soit} \\quad kx_v - \\psi = n\\pi$$\n\nSoit :\n\n$$x_v = \\frac{n}{2}\\lambda + \\frac{\\psi}{k}$$\n\nLa distance entre deux ventres successifs est égale à $\\frac{\\lambda}{2}$.\n\nLa distance entre un nœud et un ventre successif est égale à $\\frac{\\lambda}{4}$.\n\n## II – Ondes planes EM dans le vide :\n\n### 1 – Ondes planes électromagnétiques :\n\nUne onde plane EM de direction de propagation $\\vec{u_z}$ est une structure du champ EM dans laquelle les coordonnées des champs $\\vec{E}$ et $\\vec{B}$ sont des fonctions de la forme :\n\n$$s(z,t) = f\\left(t - \\frac{z}{c}\\right)$$\n\n7\n",
        "images": [
            {
                "name": "img_p6_1.png",
                "height": 744,
                "width": 1058,
                "x": 129.35999999999999,
                "y": 70.79960000000003,
                "original_width": 1058,
                "original_height": 744,
                "ocr": [
                    {
                        "x": 32,
                        "y": 64,
                        "w": 88,
                        "h": 26,
                        "confidence": "0.8100871059242424",
                        "text": "ventre"
                    },
                    {
                        "x": 14,
                        "y": 150,
                        "w": 60,
                        "h": 28,
                        "confidence": "0.9562750718011808",
                        "text": "i =0"
                    },
                    {
                        "x": 12,
                        "y": 196,
                        "w": 62,
                        "h": 28,
                        "confidence": "0.2950644665084604",
                        "text": "{ =1"
                    },
                    {
                        "x": 597,
                        "y": 187,
                        "w": 18,
                        "h": 24,
                        "confidence": "0.8679950137285495",
                        "text": "A"
                    },
                    {
                        "x": 731,
                        "y": 189,
                        "w": 18,
                        "h": 24,
                        "confidence": "0.7240270473275814",
                        "text": "A"
                    },
                    {
                        "x": 597,
                        "y": 227,
                        "w": 20,
                        "h": 24,
                        "confidence": "1.0",
                        "text": "4"
                    },
                    {
                        "x": 731,
                        "y": 225,
                        "w": 18,
                        "h": 26,
                        "confidence": "1.0",
                        "text": "2"
                    },
                    {
                        "x": 14,
                        "y": 242,
                        "w": 64,
                        "h": 32,
                        "confidence": "0.5625456307465166",
                        "text": "i =2"
                    },
                    {
                        "x": 12,
                        "y": 288,
                        "w": 62,
                        "h": 30,
                        "confidence": "0.7301867124058062",
                        "text": "i=3"
                    },
                    {
                        "x": 10,
                        "y": 334,
                        "w": 62,
                        "h": 28,
                        "confidence": "0.3715074360370636",
                        "text": "{ =4"
                    },
                    {
                        "x": 8,
                        "y": 384,
                        "w": 62,
                        "h": 28,
                        "confidence": "0.4858243292559926",
                        "text": "{ =5"
                    },
                    {
                        "x": 8,
                        "y": 434,
                        "w": 62,
                        "h": 28,
                        "confidence": "0.29273160505995927",
                        "text": "i = 6"
                    },
                    {
                        "x": 6,
                        "y": 478,
                        "w": 64,
                        "h": 28,
                        "confidence": "0.49736967758706463",
                        "text": "i =7"
                    },
                    {
                        "x": 4,
                        "y": 522,
                        "w": 62,
                        "h": 30,
                        "confidence": "0.8305436372756958",
                        "text": "i =8"
                    },
                    {
                        "x": 6,
                        "y": 570,
                        "w": 64,
                        "h": 30,
                        "confidence": "0.9584720233229448",
                        "text": "i=9"
                    },
                    {
                        "x": 639,
                        "y": 595,
                        "w": 18,
                        "h": 26,
                        "confidence": "1.0",
                        "text": "2"
                    },
                    {
                        "x": 2,
                        "y": 610,
                        "w": 80,
                        "h": 32,
                        "confidence": "0.8212285835958325",
                        "text": "i =10"
                    },
                    {
                        "x": 84,
                        "y": 690,
                        "w": 88,
                        "h": 30,
                        "confidence": "0.9999773423633286",
                        "text": "noeud"
                    }
                ]
            },
            {
                "name": "page_7.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "ventre\ni = 0\ni = 1\ni = 2                                λ/4    λ/2\ni = 3\ni = 4\ni = 5\ni = 6                                       λ/2\ni = 7\ni = 8\ni = 9\ni = 10\nnoeud\n\nPosition des nœuds : elle s'obtient en écrivant que :\n\n$$\\cos(kx-\\psi) = 0 \\quad \\text{soit} \\quad kx_n - \\psi = (2n+1)\\frac{\\pi}{2}$$\n\nSoit, avec $k = \\frac{2\\pi}{\\lambda}$ :\n\n$$x_n = \\frac{2n+1}{4}\\lambda + \\frac{\\psi}{k}$$\n\nLa distance entre deux nœuds successifs est égale à $\\frac{\\lambda}{2}$.\n\nPosition des ventres : elle s'obtient en écrivant que :\n\n$$\\cos(kx-\\psi) = \\pm1 \\quad \\text{soit} \\quad kx_v - \\psi = n\\pi$$\n\nSoit :\n\n$$x_v = \\frac{n}{2}\\lambda + \\frac{\\psi}{k}$$\n\nLa distance entre deux ventres successifs est égale à $\\frac{\\lambda}{2}$.\n\nLa distance entre un nœud et un ventre successif est égale à $\\frac{\\lambda}{4}$.",
                "md": "ventre\ni = 0\ni = 1\ni = 2                                λ/4    λ/2\ni = 3\ni = 4\ni = 5\ni = 6                                       λ/2\ni = 7\ni = 8\ni = 9\ni = 10\nnoeud\n\nPosition des nœuds : elle s'obtient en écrivant que :\n\n$$\\cos(kx-\\psi) = 0 \\quad \\text{soit} \\quad kx_n - \\psi = (2n+1)\\frac{\\pi}{2}$$\n\nSoit, avec $k = \\frac{2\\pi}{\\lambda}$ :\n\n$$x_n = \\frac{2n+1}{4}\\lambda + \\frac{\\psi}{k}$$\n\nLa distance entre deux nœuds successifs est égale à $\\frac{\\lambda}{2}$.\n\nPosition des ventres : elle s'obtient en écrivant que :\n\n$$\\cos(kx-\\psi) = \\pm1 \\quad \\text{soit} \\quad kx_v - \\psi = n\\pi$$\n\nSoit :\n\n$$x_v = \\frac{n}{2}\\lambda + \\frac{\\psi}{k}$$\n\nLa distance entre deux ventres successifs est égale à $\\frac{\\lambda}{2}$.\n\nLa distance entre un nœud et un ventre successif est égale à $\\frac{\\lambda}{4}$.",
                "bBox": {
                    "x": 127,
                    "y": 91.1,
                    "w": 240.57,
                    "h": 720.86
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "II – Ondes planes EM dans le vide :",
                "md": "## II – Ondes planes EM dans le vide :",
                "bBox": {
                    "x": 319.23,
                    "y": 130.13,
                    "w": 48.34,
                    "h": 8.25
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "1 – Ondes planes électromagnétiques :",
                "md": "### 1 – Ondes planes électromagnétiques :",
                "bBox": {
                    "x": 319.23,
                    "y": 130.13,
                    "w": 48.34,
                    "h": 581.86
                }
            },
            {
                "type": "text",
                "value": "Une onde plane EM de direction de propagation $\\vec{u_z}$ est une structure du champ EM dans laquelle les coordonnées des champs $\\vec{E}$ et $\\vec{B}$ sont des fonctions de la forme :\n\n$$s(z,t) = f\\left(t - \\frac{z}{c}\\right)$$\n\n7",
                "md": "Une onde plane EM de direction de propagation $\\vec{u_z}$ est une structure du champ EM dans laquelle les coordonnées des champs $\\vec{E}$ et $\\vec{B}$ sont des fonctions de la forme :\n\n$$s(z,t) = f\\left(t - \\frac{z}{c}\\right)$$\n\n7",
                "bBox": {
                    "x": 127,
                    "y": 130.13,
                    "w": 240.57,
                    "h": 681.83
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 8,
        "text": "Toute  coordonnée  du  champ  a,  à  un  instant  donné,  même  valeur  en  tout  point  d’un  plan\nz = cste. Un tel plan, orthogonal à la direction de propagation r , est appelé plan d’onde.  uz\nUne  source  (par  exemple,  une  station  radiophonique)  émet  a  priori  des  ondes  sphériques ;\ncependant, à grande distance de celle-ci, l’onde reçue pourra être localement assimilée à une onde\nplane progressive\n\n          2 – Caractère transverse d’une onde plane dans le vide :\n1ère démonstration :\nOn s’intéresse à une onde plane de la forme :\n                               Er(x,y,z,t)=    Er(z,t)           et           Br(x,y,z,t)=Br(z,t)\nLes équations de Maxwell donnent :\n     •    Equation de Maxwell – Gauss :\n                                         divEr=0            soit          ∂Ez  =0       (1)\n                                                                           ∂z\n\n\n\n     •    Equation de Maxwell – flux :\n                                         div Br=0           soit         ∂Bz   =0       (2)\n                                                                          ∂z\n\n\n\n     •    Equation de Maxwell - Faraday :\n                                                                          ∂Ey   =−∂Bx\n                                                                        −                      (3)\n                                         =−∂r                              ∂z         ∂t\n                                      r       B                           ∂Ex   =−∂By\n                                 rotE                    soit           +                      (4)\n                                              ∂t                           ∂z         ∂t\n                                                                            0   =−∂Bz          (5)\n                                                                                      ∂t\n\n\n\n     •    Equation de Maxwell - Ampère :\n                                                                         ∂By      1   ∂Ex\n                                                                       −  ∂z   =  c2   ∂t       (6)\n                              rot  Br=   1  ∂rE         soit           + ∂Bx   =c12   ∂Ey       (7)\n                                        c2   ∂t                           ∂z           ∂t\n                                                                           0   =−c21    ∂Ez       (8)\n                                                                                         ∂t\nLes  équations  (1)  et  (8)  donnent :            ∂Ez   =0     et   ∂Ez  =0,  par  conséquent,        Ez  =0  (les  champs\n                                                    ∂z                ∂t\nstatiques n’interviennent pas ici lors du phénomène de propagation).\nDe même, les équations (2) et (5) montrent que Bz                    =0.\nAinsi, les coordonnées du champ EM parallèles à la direction de propagation  zur  sont nulles : le\nchamp EM est transversal.\n\nRelation entre les normes des champs  Er  et  B :  r\n\n\n\n                                                                 8",
        "md": "Toute coordonnée du champ a, à un instant donné, même valeur en tout point d'un plan z = cste. Un tel plan, orthogonal à la direction de propagation $\\vec{u_z}$, est appelé plan d'onde.\n\nUne source (par exemple, une station radiophonique) émet a priori des ondes sphériques ; cependant, à grande distance de celle-ci, l'onde reçue pourra être localement assimilée à une onde plane progressive\n\n## 2 – Caractère transverse d'une onde plane dans le vide :\n\n### 1ère démonstration :\n\nOn s'intéresse à une onde plane de la forme :\n\n$\\vec{E}(x,y,z,t)=\\vec{E}(z,t)$ et $\\vec{B}(x,y,z,t)=\\vec{B}(z,t)$\n\nLes équations de Maxwell donnent :\n\n- Equation de Maxwell – Gauss :\n\n  $div \\vec{E}=0$ soit $\\frac{\\partial E_z}{\\partial z}=0$ (1)\n\n- Equation de Maxwell – flux :\n\n  $div \\vec{B}=0$ soit $\\frac{\\partial B_z}{\\partial z}=0$ (2)\n\n- Equation de Maxwell - Faraday :\n\n  $\\vec{rot} \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ soit \n  \n  $-\\frac{\\partial E_y}{\\partial z} = -\\frac{\\partial B_x}{\\partial t}$ (3)\n  \n  $+\\frac{\\partial E_x}{\\partial z} = -\\frac{\\partial B_y}{\\partial t}$ (4)\n  \n  $0 = -\\frac{\\partial B_z}{\\partial t}$ (5)\n\n- Equation de Maxwell - Ampère :\n\n  $\\vec{rot} \\vec{B} = \\frac{1}{c^2}\\frac{\\partial \\vec{E}}{\\partial t}$ soit\n  \n  $-\\frac{\\partial B_y}{\\partial z} = \\frac{1}{c^2}\\frac{\\partial E_x}{\\partial t}$ (6)\n  \n  $+\\frac{\\partial B_x}{\\partial z} = \\frac{1}{c^2}\\frac{\\partial E_y}{\\partial t}$ (7)\n  \n  $0 = -\\frac{1}{c^2}\\frac{\\partial E_z}{\\partial t}$ (8)\n\nLes équations (1) et (8) donnent : $\\frac{\\partial E_z}{\\partial z}=0$ et $\\frac{\\partial E_z}{\\partial t}=0$, par conséquent, $E_z=0$ (les champs statiques n'interviennent pas ici lors du phénomène de propagation).\n\nDe même, les équations (2) et (5) montrent que $B_z=0$.\n\nAinsi, les coordonnées du champ EM parallèles à la direction de propagation $\\vec{u_z}$ sont nulles : le champ EM est transversal.\n\nRelation entre les normes des champs $\\vec{E}$ et $\\vec{B}$ :",
        "images": [
            {
                "name": "page_8.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "Toute coordonnée du champ a, à un instant donné, même valeur en tout point d'un plan z = cste. Un tel plan, orthogonal à la direction de propagation $\\vec{u_z}$, est appelé plan d'onde.\n\nUne source (par exemple, une station radiophonique) émet a priori des ondes sphériques ; cependant, à grande distance de celle-ci, l'onde reçue pourra être localement assimilée à une onde plane progressive",
                "md": "Toute coordonnée du champ a, à un instant donné, même valeur en tout point d'un plan z = cste. Un tel plan, orthogonal à la direction de propagation $\\vec{u_z}$, est appelé plan d'onde.\n\nUne source (par exemple, une station radiophonique) émet a priori des ondes sphériques ; cependant, à grande distance de celle-ci, l'onde reçue pourra être localement assimilée à une onde plane progressive",
                "bBox": {
                    "x": 177,
                    "y": 243,
                    "w": 268.99,
                    "h": 506.94
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "2 – Caractère transverse d'une onde plane dans le vide :",
                "md": "## 2 – Caractère transverse d'une onde plane dans le vide :",
                "bBox": {
                    "x": 177,
                    "y": 243,
                    "w": 268.99,
                    "h": 459.99
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "1ère démonstration :",
                "md": "### 1ère démonstration :",
                "bBox": {
                    "x": 177,
                    "y": 243,
                    "w": 188.99,
                    "h": 356.99
                }
            },
            {
                "type": "text",
                "value": "On s'intéresse à une onde plane de la forme :\n\n$\\vec{E}(x,y,z,t)=\\vec{E}(z,t)$ et $\\vec{B}(x,y,z,t)=\\vec{B}(z,t)$\n\nLes équations de Maxwell donnent :\n\n- Equation de Maxwell – Gauss :\n\n  $div \\vec{E}=0$ soit $\\frac{\\partial E_z}{\\partial z}=0$ (1)\n\n- Equation de Maxwell – flux :\n\n  $div \\vec{B}=0$ soit $\\frac{\\partial B_z}{\\partial z}=0$ (2)\n\n- Equation de Maxwell - Faraday :\n\n  $\\vec{rot} \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ soit \n  \n  $-\\frac{\\partial E_y}{\\partial z} = -\\frac{\\partial B_x}{\\partial t}$ (3)\n  \n  $+\\frac{\\partial E_x}{\\partial z} = -\\frac{\\partial B_y}{\\partial t}$ (4)\n  \n  $0 = -\\frac{\\partial B_z}{\\partial t}$ (5)\n\n- Equation de Maxwell - Ampère :\n\n  $\\vec{rot} \\vec{B} = \\frac{1}{c^2}\\frac{\\partial \\vec{E}}{\\partial t}$ soit\n  \n  $-\\frac{\\partial B_y}{\\partial z} = \\frac{1}{c^2}\\frac{\\partial E_x}{\\partial t}$ (6)\n  \n  $+\\frac{\\partial B_x}{\\partial z} = \\frac{1}{c^2}\\frac{\\partial E_y}{\\partial t}$ (7)\n  \n  $0 = -\\frac{1}{c^2}\\frac{\\partial E_z}{\\partial t}$ (8)\n\nLes équations (1) et (8) donnent : $\\frac{\\partial E_z}{\\partial z}=0$ et $\\frac{\\partial E_z}{\\partial t}=0$, par conséquent, $E_z=0$ (les champs statiques n'interviennent pas ici lors du phénomène de propagation).\n\nDe même, les équations (2) et (5) montrent que $B_z=0$.\n\nAinsi, les coordonnées du champ EM parallèles à la direction de propagation $\\vec{u_z}$ sont nulles : le champ EM est transversal.\n\nRelation entre les normes des champs $\\vec{E}$ et $\\vec{B}$ :",
                "md": "On s'intéresse à une onde plane de la forme :\n\n$\\vec{E}(x,y,z,t)=\\vec{E}(z,t)$ et $\\vec{B}(x,y,z,t)=\\vec{B}(z,t)$\n\nLes équations de Maxwell donnent :\n\n- Equation de Maxwell – Gauss :\n\n  $div \\vec{E}=0$ soit $\\frac{\\partial E_z}{\\partial z}=0$ (1)\n\n- Equation de Maxwell – flux :\n\n  $div \\vec{B}=0$ soit $\\frac{\\partial B_z}{\\partial z}=0$ (2)\n\n- Equation de Maxwell - Faraday :\n\n  $\\vec{rot} \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ soit \n  \n  $-\\frac{\\partial E_y}{\\partial z} = -\\frac{\\partial B_x}{\\partial t}$ (3)\n  \n  $+\\frac{\\partial E_x}{\\partial z} = -\\frac{\\partial B_y}{\\partial t}$ (4)\n  \n  $0 = -\\frac{\\partial B_z}{\\partial t}$ (5)\n\n- Equation de Maxwell - Ampère :\n\n  $\\vec{rot} \\vec{B} = \\frac{1}{c^2}\\frac{\\partial \\vec{E}}{\\partial t}$ soit\n  \n  $-\\frac{\\partial B_y}{\\partial z} = \\frac{1}{c^2}\\frac{\\partial E_x}{\\partial t}$ (6)\n  \n  $+\\frac{\\partial B_x}{\\partial z} = \\frac{1}{c^2}\\frac{\\partial E_y}{\\partial t}$ (7)\n  \n  $0 = -\\frac{1}{c^2}\\frac{\\partial E_z}{\\partial t}$ (8)\n\nLes équations (1) et (8) donnent : $\\frac{\\partial E_z}{\\partial z}=0$ et $\\frac{\\partial E_z}{\\partial t}=0$, par conséquent, $E_z=0$ (les champs statiques n'interviennent pas ici lors du phénomène de propagation).\n\nDe même, les équations (2) et (5) montrent que $B_z=0$.\n\nAinsi, les coordonnées du champ EM parallèles à la direction de propagation $\\vec{u_z}$ sont nulles : le champ EM est transversal.\n\nRelation entre les normes des champs $\\vec{E}$ et $\\vec{B}$ :",
                "bBox": {
                    "x": 175,
                    "y": 243,
                    "w": 270.99,
                    "h": 568.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 9,
        "text": "En notant Ex(z,t)=Ex⎜⌈ −c⎝\n                               ⌊t    z⌉ et Bx(z,t)=Bx⎜⌋      ⌈ −c⎝\n                                                             ⌊t   z⌉, on constate que :  ⌋\n                                       ∂Ex   =−1∂Ex               et         ∂Bx   =−1    ∂Bx\n                                        ∂z        c   ∂t                      ∂z        c   ∂t\nIl en est de même pour les coordonnées selon (Oy).\nAinsi,\n                             −  ∂Ey   =−∂Bx          (3)                               ∂Ey   =−c∂Bx\n                                 ∂z         ∂t       (4)          donnent          ∂∂z               ∂z\n                             +  ∂Ex   =−∂By                                              Ex  =c   ∂By\n                                 ∂z         ∂t                                          ∂z         ∂z\nEn intégrant sans tenir compte de coordonnées d’intégration constantes :\n                                             Ey   =−cBx            et         Ex  =cBy\nPar conséquent :\n                                          r=   r∧curz                           r=  urz    r\n                                          E    B                   ou          B     c  ∧E\nFinalement,  les  champ  EM  d’une  onde  plane  progressive  sont  orthogonaux  à  la  direction  de r,Br,cr=curz) est direct et E = Bc.\npropagation et orthogonaux entre eux ; le trièdre (E\n                                                                 r\n                                         Plan d’onde            E\n                                            z=cste\n                                              r                      cu rz\n                                             E              r                             z\n                                                           B\n                                                  cu rz\n                                         r\n                                        B\n\n\n\n                                    Le champ EM est uniforme dans un plan d’onde.\nLa force exercée par l’onde EM sur une particule de charge q et de vitesse  vr  est :\n                                                   fr=qEr+qr∧Bv       r=   fre+  frm\nPar conséquent, le rapport de la force électrique sur la force magnétique vaut :\n                                                            fe  =  E   =  c\n                                                            fm     vB     v\n\n\n\nPar conséquent, pour une particule non relativiste (v << c), la force magnétique est négligeable\nvis-à-vis de la force électrique.\n\n2ème démonstration :\nEn notant Ex(z,t)=Ex⎜⌈ −c⎝\n                               ⌊t    z⌉ et Bx(z,t)=Bx⎜⌋      ⌈ −c⎝\n                                                             ⌊t   z⌉, on constate, de manière symbolique, que :\n                                                                    ⌋\n                                                                   9",
        "md": "En notant $E_x(z,t) = E_x(t - \\frac{z}{c})$ et $B_x(z,t) = B_x(t - \\frac{z}{c})$, on constate que :\n\n$$\\frac{\\partial E_x}{\\partial z} = -\\frac{1}{c} \\frac{\\partial E_x}{\\partial t} \\quad \\text{et} \\quad \\frac{\\partial B_x}{\\partial z} = -\\frac{1}{c} \\frac{\\partial B_x}{\\partial t}$$\n\nIl en est de même pour les coordonnées selon (Oy).\n\nAinsi,\n\n$$\\begin{aligned}\n-\\frac{\\partial E_y}{\\partial z} &= -\\frac{\\partial B_x}{\\partial t} \\quad (3) \\\\\n+\\frac{\\partial E_x}{\\partial z} &= -\\frac{\\partial B_y}{\\partial t} \\quad (4)\n\\end{aligned}\n\\quad \\text{donnent} \\quad\n\\begin{aligned}\n\\frac{\\partial E_y}{\\partial z} &= -c\\frac{\\partial B_x}{\\partial z} \\\\\n\\frac{\\partial E_x}{\\partial z} &= c\\frac{\\partial B_y}{\\partial z}\n\\end{aligned}$$\n\nEn intégrant sans tenir compte de coordonnées d'intégration constantes :\n\n$$E_y = -cB_x \\quad \\text{et} \\quad E_x = cB_y$$\n\nPar conséquent :\n\n$$\\vec{E} = \\vec{B} \\wedge c\\vec{u_z} \\quad \\text{ou} \\quad \\vec{B} = \\frac{\\vec{u_z}}{c} \\wedge \\vec{E}$$\n\nFinalement, les champ EM d'une onde plane progressive sont orthogonaux à la direction de propagation et orthogonaux entre eux ; le trièdre $(\\vec{E}, \\vec{B}, c = c\\vec{u_z})$ est direct et $E = Bc$.\n\n```mermaid\ngraph TD\n    A[Plan d'onde z=cste] --> B[E]\n    A --> C[B]\n    B --> D[cuz]\n    C --> D\n    D --> E[z]\n```\n\nLe champ EM est uniforme dans un plan d'onde.\n\nLa force exercée par l'onde EM sur une particule de charge q et de vitesse $\\vec{v}$ est :\n\n$$\\vec{f} = q\\vec{E} + q\\vec{v} \\wedge \\vec{B} = \\vec{f_e} + \\vec{f_m}$$\n\nPar conséquent, le rapport de la force électrique sur la force magnétique vaut :\n\n$$\\frac{f_e}{f_m} = \\frac{E}{vB} = \\frac{c}{v}$$\n\nPar conséquent, pour une particule non relativiste (v << c), la force magnétique est négligeable vis-à-vis de la force électrique.\n\n## 2ème démonstration :\n\nEn notant $E_x(z,t) = E_x(t - \\frac{z}{c})$ et $B_x(z,t) = B_x(t - \\frac{z}{c})$, on constate, de manière symbolique, que :",
        "images": [
            {
                "name": "page_9.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "En notant $E_x(z,t) = E_x(t - \\frac{z}{c})$ et $B_x(z,t) = B_x(t - \\frac{z}{c})$, on constate que :\n\n$$\\frac{\\partial E_x}{\\partial z} = -\\frac{1}{c} \\frac{\\partial E_x}{\\partial t} \\quad \\text{et} \\quad \\frac{\\partial B_x}{\\partial z} = -\\frac{1}{c} \\frac{\\partial B_x}{\\partial t}$$\n\nIl en est de même pour les coordonnées selon (Oy).\n\nAinsi,\n\n$$\\begin{aligned}\n-\\frac{\\partial E_y}{\\partial z} &= -\\frac{\\partial B_x}{\\partial t} \\quad (3) \\\\\n+\\frac{\\partial E_x}{\\partial z} &= -\\frac{\\partial B_y}{\\partial t} \\quad (4)\n\\end{aligned}\n\\quad \\text{donnent} \\quad\n\\begin{aligned}\n\\frac{\\partial E_y}{\\partial z} &= -c\\frac{\\partial B_x}{\\partial z} \\\\\n\\frac{\\partial E_x}{\\partial z} &= c\\frac{\\partial B_y}{\\partial z}\n\\end{aligned}$$\n\nEn intégrant sans tenir compte de coordonnées d'intégration constantes :\n\n$$E_y = -cB_x \\quad \\text{et} \\quad E_x = cB_y$$\n\nPar conséquent :\n\n$$\\vec{E} = \\vec{B} \\wedge c\\vec{u_z} \\quad \\text{ou} \\quad \\vec{B} = \\frac{\\vec{u_z}}{c} \\wedge \\vec{E}$$\n\nFinalement, les champ EM d'une onde plane progressive sont orthogonaux à la direction de propagation et orthogonaux entre eux ; le trièdre $(\\vec{E}, \\vec{B}, c = c\\vec{u_z})$ est direct et $E = Bc$.\n\n```mermaid\ngraph TD\n    A[Plan d'onde z=cste] --> B[E]\n    A --> C[B]\n    B --> D[cuz]\n    C --> D\n    D --> E[z]\n```\n\nLe champ EM est uniforme dans un plan d'onde.\n\nLa force exercée par l'onde EM sur une particule de charge q et de vitesse $\\vec{v}$ est :\n\n$$\\vec{f} = q\\vec{E} + q\\vec{v} \\wedge \\vec{B} = \\vec{f_e} + \\vec{f_m}$$\n\nPar conséquent, le rapport de la force électrique sur la force magnétique vaut :\n\n$$\\frac{f_e}{f_m} = \\frac{E}{vB} = \\frac{c}{v}$$\n\nPar conséquent, pour une particule non relativiste (v << c), la force magnétique est négligeable vis-à-vis de la force électrique.",
                "md": "En notant $E_x(z,t) = E_x(t - \\frac{z}{c})$ et $B_x(z,t) = B_x(t - \\frac{z}{c})$, on constate que :\n\n$$\\frac{\\partial E_x}{\\partial z} = -\\frac{1}{c} \\frac{\\partial E_x}{\\partial t} \\quad \\text{et} \\quad \\frac{\\partial B_x}{\\partial z} = -\\frac{1}{c} \\frac{\\partial B_x}{\\partial t}$$\n\nIl en est de même pour les coordonnées selon (Oy).\n\nAinsi,\n\n$$\\begin{aligned}\n-\\frac{\\partial E_y}{\\partial z} &= -\\frac{\\partial B_x}{\\partial t} \\quad (3) \\\\\n+\\frac{\\partial E_x}{\\partial z} &= -\\frac{\\partial B_y}{\\partial t} \\quad (4)\n\\end{aligned}\n\\quad \\text{donnent} \\quad\n\\begin{aligned}\n\\frac{\\partial E_y}{\\partial z} &= -c\\frac{\\partial B_x}{\\partial z} \\\\\n\\frac{\\partial E_x}{\\partial z} &= c\\frac{\\partial B_y}{\\partial z}\n\\end{aligned}$$\n\nEn intégrant sans tenir compte de coordonnées d'intégration constantes :\n\n$$E_y = -cB_x \\quad \\text{et} \\quad E_x = cB_y$$\n\nPar conséquent :\n\n$$\\vec{E} = \\vec{B} \\wedge c\\vec{u_z} \\quad \\text{ou} \\quad \\vec{B} = \\frac{\\vec{u_z}}{c} \\wedge \\vec{E}$$\n\nFinalement, les champ EM d'une onde plane progressive sont orthogonaux à la direction de propagation et orthogonaux entre eux ; le trièdre $(\\vec{E}, \\vec{B}, c = c\\vec{u_z})$ est direct et $E = Bc$.\n\n```mermaid\ngraph TD\n    A[Plan d'onde z=cste] --> B[E]\n    A --> C[B]\n    B --> D[cuz]\n    C --> D\n    D --> E[z]\n```\n\nLe champ EM est uniforme dans un plan d'onde.\n\nLa force exercée par l'onde EM sur une particule de charge q et de vitesse $\\vec{v}$ est :\n\n$$\\vec{f} = q\\vec{E} + q\\vec{v} \\wedge \\vec{B} = \\vec{f_e} + \\vec{f_m}$$\n\nPar conséquent, le rapport de la force électrique sur la force magnétique vaut :\n\n$$\\frac{f_e}{f_m} = \\frac{E}{vB} = \\frac{c}{v}$$\n\nPar conséquent, pour une particule non relativiste (v << c), la force magnétique est négligeable vis-à-vis de la force électrique.",
                "bBox": {
                    "x": 70,
                    "y": 125,
                    "w": 456.57,
                    "h": 565
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "2ème démonstration :",
                "md": "## 2ème démonstration :",
                "bBox": {
                    "x": 207,
                    "y": 325,
                    "w": 97.09,
                    "h": 326.97
                }
            },
            {
                "type": "text",
                "value": "En notant $E_x(z,t) = E_x(t - \\frac{z}{c})$ et $B_x(z,t) = B_x(t - \\frac{z}{c})$, on constate, de manière symbolique, que :",
                "md": "En notant $E_x(z,t) = E_x(t - \\frac{z}{c})$ et $B_x(z,t) = B_x(t - \\frac{z}{c})$, on constate, de manière symbolique, que :",
                "bBox": {
                    "x": 205,
                    "y": 125,
                    "w": 166.43,
                    "h": 534.01
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 10,
        "text": "                           ∂   =0             ;           ∂   =0             ;            ∂  =−c1     ∂\n                           ∂x                             ∂y                             ∂z          ∂t\nAinsi, l’opérateur gradient (ou le vecteur nabla) peut s’écrire :\n                                                              r    −1∂turz ∂\n                                                     grad=∇=         c\nLes équations de Maxwell deviennent alors, compte tenu de ce formalisme :\n                 −1∂∂turzE.r=0                                                           ∂t(rz.r)=0\n                                                                                         ∂   u   E\n                    c\n                 −1∂∂turzB.r=0                                                           ∂t(rz.r)=0\n                                                                                         ∂    u  B\n                    c           r=−∂r                  soit (avec ur z =cste)          1∂t(urz         r)=∂r\n                 −1∂∂turz∧Ec           ∂t∂rB                                             c  ∂       ∧Er)=1∂trB\n                 −1∂∂turz∧Br=       c21   E                                              −∂∂t (rz∧Bu          ∂E\n                    c                    ∂t                                                                c  ∂t\n\n\n\nEn annulant les constantes d’intégration, les deux premières équations donnent :\n                                             urz.rE=0           et         urz.r=0 B\nOn retrouve la caractère transversal du champ EM.\nLes deux dernières équations donnent, après intégration :\n                                       1(urz∧Er)=Br             et         urz∧Br=−1Er\n                                       c                                                c\nSoit :\n                                         r=   r∧curz                         r=   urz    r\n                                        E     B                  ou          B     c  ∧E\nOn retrouve les mêmes relations que lors de la 1ère démonstration.\n\nIII – Ondes planes progressives monochromatiques (ou harmoniques) :\n          1 – Solutions sinusoïdales de l’équation de propagation de d’Alembert :\nL’équation  de  propagation  est  linéaire ;  par  conséquent,  l’analyse  de  Fourier  permet  d’affirmer\nque toute solution de cette équation est la somme de fonctions sinusoïdales du temps.\nOn  se  limite  ici  à  des  solutions  harmoniques  de  l’équation  de  d’Alembert,  c’est-à-dire  des\nsolutions de la forme :\n                                                s(x,t)=     Acos⌊⌈ω(t−cz)⌋⌉\n                                                                    ⎜            ⎝\nCes solutions correspondent à des ondes planes progressives harmoniques (OPPH).\nCes  fonctions,  de  période  temporelle               T=    2π    possèdent  une  période  spatiale             λ=cT  =2π  c\n                                                             ω                                                              ω\nappelée longueur d’onde.\nOn définit le vecteur d’onde  kr  tel que :\n\n\n\n                                                                10",
        "md": "$$\\frac{\\partial}{\\partial x} = 0 \\quad ; \\quad \\frac{\\partial}{\\partial y} = 0 \\quad ; \\quad \\frac{\\partial}{\\partial z} = -\\frac{1}{c}\\frac{\\partial}{\\partial t}$$\n\nAinsi, l'opérateur gradient (ou le vecteur nabla) peut s'écrire :\n\n$$\\overrightarrow{grad} = \\vec{\\nabla} = -\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}$$\n\nLes équations de Maxwell deviennent alors, compte tenu de ce formalisme :\n\n$$\\begin{aligned}\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}.\\vec{E} &= 0 & \\frac{\\partial}{\\partial t}(\\vec{u_z}.\\vec{E}) &= 0 \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}.\\vec{B} &= 0 & \\frac{\\partial}{\\partial t}(\\vec{u_z}.\\vec{B}) &= 0 \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z} \\wedge \\vec{E} &= -\\frac{\\partial \\vec{B}}{\\partial t} & \\text{soit (avec } \\vec{u_z} = cste\\text{)} & \\frac{1}{c}\\frac{\\partial}{\\partial t}(\\vec{u_z} \\wedge \\vec{E}) = \\frac{\\partial \\vec{B}}{\\partial t} \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z} \\wedge \\vec{B} &= \\frac{1}{c^2}\\frac{\\partial \\vec{E}}{\\partial t} & & -\\frac{\\partial}{\\partial t}(\\vec{u_z} \\wedge \\vec{B}) = \\frac{1}{c}\\frac{\\partial \\vec{E}}{\\partial t}\n\\end{aligned}$$\n\nEn annulant les constantes d'intégration, les deux premières équations donnent :\n\n$$\\vec{u_z}.\\vec{E} = 0 \\quad et \\quad \\vec{u_z}.\\vec{B} = 0$$\n\nOn retrouve la caractère transversal du champ EM.\n\nLes deux dernières équations donnent, après intégration :\n\n$$\\frac{1}{c}(\\vec{u_z} \\wedge \\vec{E}) = \\vec{B} \\quad et \\quad \\vec{u_z} \\wedge \\vec{B} = -\\frac{1}{c}\\vec{E}$$\n\nSoit :\n\n$$\\vec{E} = \\vec{B} \\wedge c\\vec{u_z} \\quad ou \\quad \\vec{B} = \\frac{\\vec{u_z}}{c} \\wedge \\vec{E}$$\n\nOn retrouve les mêmes relations que lors de la 1ère démonstration.\n\n## III – Ondes planes progressives monochromatiques (ou harmoniques) :\n\n### 1 – Solutions sinusoïdales de l'équation de propagation de d'Alembert :\n\nL'équation de propagation est linéaire ; par conséquent, l'analyse de Fourier permet d'affirmer que toute solution de cette équation est la somme de fonctions sinusoïdales du temps.\n\nOn se limite ici à des solutions harmoniques de l'équation de d'Alembert, c'est-à-dire des solutions de la forme :\n\n$$s(x,t) = A\\cos\\left(\\omega(t-\\frac{z}{c})\\right)$$\n\nCes solutions correspondent à des ondes planes progressives harmoniques (OPPH).\n\nCes fonctions, de période temporelle $T = \\frac{2\\pi}{\\omega}$ possèdent une période spatiale $\\lambda = cT = 2\\pi\\frac{c}{\\omega}$ appelée longueur d'onde.\n\nOn définit le vecteur d'onde $\\vec{k}$ tel que :",
        "images": [
            {
                "name": "page_10.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$\\frac{\\partial}{\\partial x} = 0 \\quad ; \\quad \\frac{\\partial}{\\partial y} = 0 \\quad ; \\quad \\frac{\\partial}{\\partial z} = -\\frac{1}{c}\\frac{\\partial}{\\partial t}$$\n\nAinsi, l'opérateur gradient (ou le vecteur nabla) peut s'écrire :\n\n$$\\overrightarrow{grad} = \\vec{\\nabla} = -\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}$$\n\nLes équations de Maxwell deviennent alors, compte tenu de ce formalisme :\n\n$$\\begin{aligned}\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}.\\vec{E} &= 0 & \\frac{\\partial}{\\partial t}(\\vec{u_z}.\\vec{E}) &= 0 \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}.\\vec{B} &= 0 & \\frac{\\partial}{\\partial t}(\\vec{u_z}.\\vec{B}) &= 0 \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z} \\wedge \\vec{E} &= -\\frac{\\partial \\vec{B}}{\\partial t} & \\text{soit (avec } \\vec{u_z} = cste\\text{)} & \\frac{1}{c}\\frac{\\partial}{\\partial t}(\\vec{u_z} \\wedge \\vec{E}) = \\frac{\\partial \\vec{B}}{\\partial t} \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z} \\wedge \\vec{B} &= \\frac{1}{c^2}\\frac{\\partial \\vec{E}}{\\partial t} & & -\\frac{\\partial}{\\partial t}(\\vec{u_z} \\wedge \\vec{B}) = \\frac{1}{c}\\frac{\\partial \\vec{E}}{\\partial t}\n\\end{aligned}$$\n\nEn annulant les constantes d'intégration, les deux premières équations donnent :\n\n$$\\vec{u_z}.\\vec{E} = 0 \\quad et \\quad \\vec{u_z}.\\vec{B} = 0$$\n\nOn retrouve la caractère transversal du champ EM.\n\nLes deux dernières équations donnent, après intégration :\n\n$$\\frac{1}{c}(\\vec{u_z} \\wedge \\vec{E}) = \\vec{B} \\quad et \\quad \\vec{u_z} \\wedge \\vec{B} = -\\frac{1}{c}\\vec{E}$$\n\nSoit :\n\n$$\\vec{E} = \\vec{B} \\wedge c\\vec{u_z} \\quad ou \\quad \\vec{B} = \\frac{\\vec{u_z}}{c} \\wedge \\vec{E}$$\n\nOn retrouve les mêmes relations que lors de la 1ère démonstration.",
                "md": "$$\\frac{\\partial}{\\partial x} = 0 \\quad ; \\quad \\frac{\\partial}{\\partial y} = 0 \\quad ; \\quad \\frac{\\partial}{\\partial z} = -\\frac{1}{c}\\frac{\\partial}{\\partial t}$$\n\nAinsi, l'opérateur gradient (ou le vecteur nabla) peut s'écrire :\n\n$$\\overrightarrow{grad} = \\vec{\\nabla} = -\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}$$\n\nLes équations de Maxwell deviennent alors, compte tenu de ce formalisme :\n\n$$\\begin{aligned}\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}.\\vec{E} &= 0 & \\frac{\\partial}{\\partial t}(\\vec{u_z}.\\vec{E}) &= 0 \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z}.\\vec{B} &= 0 & \\frac{\\partial}{\\partial t}(\\vec{u_z}.\\vec{B}) &= 0 \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z} \\wedge \\vec{E} &= -\\frac{\\partial \\vec{B}}{\\partial t} & \\text{soit (avec } \\vec{u_z} = cste\\text{)} & \\frac{1}{c}\\frac{\\partial}{\\partial t}(\\vec{u_z} \\wedge \\vec{E}) = \\frac{\\partial \\vec{B}}{\\partial t} \\\\\n-\\frac{1}{c}\\frac{\\partial}{\\partial t}\\vec{u_z} \\wedge \\vec{B} &= \\frac{1}{c^2}\\frac{\\partial \\vec{E}}{\\partial t} & & -\\frac{\\partial}{\\partial t}(\\vec{u_z} \\wedge \\vec{B}) = \\frac{1}{c}\\frac{\\partial \\vec{E}}{\\partial t}\n\\end{aligned}$$\n\nEn annulant les constantes d'intégration, les deux premières équations donnent :\n\n$$\\vec{u_z}.\\vec{E} = 0 \\quad et \\quad \\vec{u_z}.\\vec{B} = 0$$\n\nOn retrouve la caractère transversal du champ EM.\n\nLes deux dernières équations donnent, après intégration :\n\n$$\\frac{1}{c}(\\vec{u_z} \\wedge \\vec{E}) = \\vec{B} \\quad et \\quad \\vec{u_z} \\wedge \\vec{B} = -\\frac{1}{c}\\vec{E}$$\n\nSoit :\n\n$$\\vec{E} = \\vec{B} \\wedge c\\vec{u_z} \\quad ou \\quad \\vec{B} = \\frac{\\vec{u_z}}{c} \\wedge \\vec{E}$$\n\nOn retrouve les mêmes relations que lors de la 1ère démonstration.",
                "bBox": {
                    "x": 139,
                    "y": 83,
                    "w": 380.44,
                    "h": 618
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "III – Ondes planes progressives monochromatiques (ou harmoniques) :",
                "md": "## III – Ondes planes progressives monochromatiques (ou harmoniques) :",
                "bBox": {
                    "x": 139,
                    "y": 138,
                    "w": 380.44,
                    "h": 563
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "1 – Solutions sinusoïdales de l'équation de propagation de d'Alembert :",
                "md": "### 1 – Solutions sinusoïdales de l'équation de propagation de d'Alembert :",
                "bBox": {
                    "x": 199,
                    "y": 83,
                    "w": 257.11,
                    "h": 387
                }
            },
            {
                "type": "text",
                "value": "L'équation de propagation est linéaire ; par conséquent, l'analyse de Fourier permet d'affirmer que toute solution de cette équation est la somme de fonctions sinusoïdales du temps.\n\nOn se limite ici à des solutions harmoniques de l'équation de d'Alembert, c'est-à-dire des solutions de la forme :\n\n$$s(x,t) = A\\cos\\left(\\omega(t-\\frac{z}{c})\\right)$$\n\nCes solutions correspondent à des ondes planes progressives harmoniques (OPPH).\n\nCes fonctions, de période temporelle $T = \\frac{2\\pi}{\\omega}$ possèdent une période spatiale $\\lambda = cT = 2\\pi\\frac{c}{\\omega}$ appelée longueur d'onde.\n\nOn définit le vecteur d'onde $\\vec{k}$ tel que :",
                "md": "L'équation de propagation est linéaire ; par conséquent, l'analyse de Fourier permet d'affirmer que toute solution de cette équation est la somme de fonctions sinusoïdales du temps.\n\nOn se limite ici à des solutions harmoniques de l'équation de d'Alembert, c'est-à-dire des solutions de la forme :\n\n$$s(x,t) = A\\cos\\left(\\omega(t-\\frac{z}{c})\\right)$$\n\nCes solutions correspondent à des ondes planes progressives harmoniques (OPPH).\n\nCes fonctions, de période temporelle $T = \\frac{2\\pi}{\\omega}$ possèdent une période spatiale $\\lambda = cT = 2\\pi\\frac{c}{\\omega}$ appelée longueur d'onde.\n\nOn définit le vecteur d'onde $\\vec{k}$ tel que :",
                "bBox": {
                    "x": 139,
                    "y": 90,
                    "w": 380.44,
                    "h": 611
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 11,
        "text": "                                       kr=   k  urz           avec              k  =  ω  =   2π\n                                                                                      c      λ\nL’OPPH est alors de la forme :\n                                                   s(x,t)=      Acos(ωt−kz))\n\n\n\n                                 Domaines d’applications des ondes électromagnétiques.\n\n\n\nEn notation réelle, le champ électrique pourra s’écrire :\n                                     Er(z,t)=     E0r  cos(ω(t−      z))=    E0r  cos(ωt    −kz)\n                                                                     c\nAvec :\n                                          kr=   krzu  =  ωurz         (vecteur d’onde)\n                                                          c\nEn notation complexe, on notera le champ EM sous la forme :\n                              Er(z,t)=     E0r  ei(ωt−kz)          et          Br(z,t)=     B0r  ei(ωt−kz)\nSi la direction de l’onde est quelconque, dans la direction du vecteur unitaire r  :   u\n                           Er(x,y,z,t)=    E0r ei(ωt−k.rrr)          et          Br(x,y,z,t)=B0r    ei(ωt−k.rrr)\noù kr =k     ur ( u vecteur unitaire donnant le sens de propagation) est le vecteur d’onde et r =OM\n                                                                                                    r             r\n(O, origine du repère et M le point d’observation).\nL’expression du Laplacien devient : ∆rE            = −(kx2   +k2y   +k2)Ez  r  = −k2 Er\n\n\n\n                                                                   11",
        "md": "$$\\vec{k} = k \\vec{u_z} \\quad \\text{avec} \\quad k = \\frac{\\omega}{c} = \\frac{2\\pi}{\\lambda}$$\n\nL'OPPH est alors de la forme :\n\n$$s(x,t) = A \\cos(\\omega t - kz))$$\n\n| fréquence de l'onde en Hz | longueur d'onde dans le vide | énergie du photon en eV | Domaine d'application |\n|---------------------------|------------------------------|-------------------------|----------------------|\n| 50 | 6000 km | 2.10⁻¹³ | Distribution EDF |\n| 50 à 10⁵ | 6000 km à 3 km | 2.10⁻¹³ à 4.10⁻¹⁰ | Fréquences industrielles Téléphonie |\n| 10⁵ à 4.10⁵ | 3 km à 800 m | 4.10⁻¹⁰ à 2.10⁻⁹ | Grandes ondes (LF) |\n| 10⁶ à 3.10⁶ | 300 m à 100 m | 4.10⁻⁹ à 10⁻⁸ | Ondes moyennes (MF) |\n| 10⁷ à 3.10⁷ | 30 m à 10 m | 4.10⁻⁸ à 10⁻⁷ | Ondes courtes (HF) |\n| 3.10⁷ à 10⁸ | 10 m à 3 m | 10⁻⁷ à 4.10⁻⁷ | Modulation de fréquence |\n| 10⁸ à 3.10¹⁰ | 3 m à 1 cm | 4.10⁻⁷ à 10⁻⁴ | Télévision et Radar |\n| 3.10¹⁰ à 8.10¹¹ | 1 cm à 0,4 mm | 10⁻⁴ à 3.10⁻³ | Micro-ondes |\n| 8.10¹¹ à 4.10¹⁴ | 400 μm à 0,8 μm | 3.10⁻³ à 1,6 | Infrarouge |\n| 4.10¹⁴ à 8.10¹⁴ | 0,8 μm à 0,4 μm | 1,6 à 3,1 | Lumière visible |\n| 8.10¹⁴ à 3.10¹⁶ | 0,4 μm à 10 nm | 3,1 à 120 | Ultraviolet |\n| 3.10¹⁶ à 3.10¹⁸ | 10 nm à 0,1 nm | 120 à 10⁴ | Rayons X mous |\n| 3.10¹⁸ à 3.10²⁰ | 0,1 nm à 1 pm | 10⁴ à 10⁶ | Rayons X durs |\n| 10²¹ | 0,3 pm | 4.10⁶ | Rayons γ |\n| 10²² | 0,03 pm | 4.10⁷ | Rayons cosmiques |\n\nDomaines d'applications des ondes électromagnétiques.\n\nEn notation réelle, le champ électrique pourra s'écrire :\n\n$$\\vec{E}(z,t) = \\vec{E_0} \\cos(\\omega(t - \\frac{z}{c})) = \\vec{E_0} \\cos(\\omega t - kz)$$\n\nAvec :\n\n$$\\vec{k} = k\\vec{u_z} = \\frac{\\omega}{c}\\vec{u_z} \\quad \\text{(vecteur d'onde)}$$\n\nEn notation complexe, on notera le champ EM sous la forme :\n\n$$\\vec{E}(z,t) = \\vec{E_0} e^{i(\\omega t - kz)} \\quad \\text{et} \\quad \\vec{B}(z,t) = \\vec{B_0} e^{i(\\omega t - kz)}$$\n\nSi la direction de l'onde est quelconque, dans la direction du vecteur unitaire $\\vec{u}$ :\n\n$$\\vec{E}(x,y,z,t) = \\vec{E_0} e^{i(\\omega t - \\vec{k}.\\vec{r})} \\quad \\text{et} \\quad \\vec{B}(x,y,z,t) = \\vec{B_0} e^{i(\\omega t - \\vec{k}.\\vec{r})}$$\n\noù $\\vec{k} = k \\vec{u}$ ($\\vec{u}$ vecteur unitaire donnant le sens de propagation) est le vecteur d'onde et $\\vec{r} = \\vec{OM}$ (O, origine du repère et M le point d'observation).\n\nL'expression du Laplacien devient :\n\n$$\\Delta \\vec{E} = -(k_x^2 + k_y^2 + k_z^2) \\vec{E} = -k^2 \\vec{E}$$\n\n11",
        "images": [
            {
                "name": "img_p10_1.png",
                "height": 585,
                "width": 637,
                "x": 117.83952,
                "y": 130.43960000000004,
                "original_width": 637,
                "original_height": 585
            },
            {
                "name": "page_11.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$\\vec{k} = k \\vec{u_z} \\quad \\text{avec} \\quad k = \\frac{\\omega}{c} = \\frac{2\\pi}{\\lambda}$$\n\nL'OPPH est alors de la forme :\n\n$$s(x,t) = A \\cos(\\omega t - kz))$$",
                "md": "$$\\vec{k} = k \\vec{u_z} \\quad \\text{avec} \\quad k = \\frac{\\omega}{c} = \\frac{2\\pi}{\\lambda}$$\n\nL'OPPH est alors de la forme :\n\n$$s(x,t) = A \\cos(\\omega t - kz))$$",
                "bBox": {
                    "x": 112,
                    "y": 90,
                    "w": 382.11,
                    "h": 681.93
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "fréquence de l'onde en Hz",
                        "longueur d'onde dans le vide",
                        "énergie du photon en eV",
                        "Domaine d'application"
                    ],
                    [
                        "50",
                        "6000 km",
                        "2.10⁻¹³",
                        "Distribution EDF"
                    ],
                    [
                        "50 à 10⁵",
                        "6000 km à 3 km",
                        "2.10⁻¹³ à 4.10⁻¹⁰",
                        "Fréquences industrielles Téléphonie"
                    ],
                    [
                        "10⁵ à 4.10⁵",
                        "3 km à 800 m",
                        "4.10⁻¹⁰ à 2.10⁻⁹",
                        "Grandes ondes (LF)"
                    ],
                    [
                        "10⁶ à 3.10⁶",
                        "300 m à 100 m",
                        "4.10⁻⁹ à 10⁻⁸",
                        "Ondes moyennes (MF)"
                    ],
                    [
                        "10⁷ à 3.10⁷",
                        "30 m à 10 m",
                        "4.10⁻⁸ à 10⁻⁷",
                        "Ondes courtes (HF)"
                    ],
                    [
                        "3.10⁷ à 10⁸",
                        "10 m à 3 m",
                        "10⁻⁷ à 4.10⁻⁷",
                        "Modulation de fréquence"
                    ],
                    [
                        "10⁸ à 3.10¹⁰",
                        "3 m à 1 cm",
                        "4.10⁻⁷ à 10⁻⁴",
                        "Télévision et Radar"
                    ],
                    [
                        "3.10¹⁰ à 8.10¹¹",
                        "1 cm à 0,4 mm",
                        "10⁻⁴ à 3.10⁻³",
                        "Micro-ondes"
                    ],
                    [
                        "8.10¹¹ à 4.10¹⁴",
                        "400 μm à 0,8 μm",
                        "3.10⁻³ à 1,6",
                        "Infrarouge"
                    ],
                    [
                        "4.10¹⁴ à 8.10¹⁴",
                        "0,8 μm à 0,4 μm",
                        "1,6 à 3,1",
                        "Lumière visible"
                    ],
                    [
                        "8.10¹⁴ à 3.10¹⁶",
                        "0,4 μm à 10 nm",
                        "3,1 à 120",
                        "Ultraviolet"
                    ],
                    [
                        "3.10¹⁶ à 3.10¹⁸",
                        "10 nm à 0,1 nm",
                        "120 à 10⁴",
                        "Rayons X mous"
                    ],
                    [
                        "3.10¹⁸ à 3.10²⁰",
                        "0,1 nm à 1 pm",
                        "10⁴ à 10⁶",
                        "Rayons X durs"
                    ],
                    [
                        "10²¹",
                        "0,3 pm",
                        "4.10⁶",
                        "Rayons γ"
                    ],
                    [
                        "10²²",
                        "0,03 pm",
                        "4.10⁷",
                        "Rayons cosmiques"
                    ]
                ],
                "md": "| fréquence de l'onde en Hz | longueur d'onde dans le vide | énergie du photon en eV | Domaine d'application |\n|---------------------------|------------------------------|-------------------------|----------------------|\n| 50 | 6000 km | 2.10⁻¹³ | Distribution EDF |\n| 50 à 10⁵ | 6000 km à 3 km | 2.10⁻¹³ à 4.10⁻¹⁰ | Fréquences industrielles Téléphonie |\n| 10⁵ à 4.10⁵ | 3 km à 800 m | 4.10⁻¹⁰ à 2.10⁻⁹ | Grandes ondes (LF) |\n| 10⁶ à 3.10⁶ | 300 m à 100 m | 4.10⁻⁹ à 10⁻⁸ | Ondes moyennes (MF) |\n| 10⁷ à 3.10⁷ | 30 m à 10 m | 4.10⁻⁸ à 10⁻⁷ | Ondes courtes (HF) |\n| 3.10⁷ à 10⁸ | 10 m à 3 m | 10⁻⁷ à 4.10⁻⁷ | Modulation de fréquence |\n| 10⁸ à 3.10¹⁰ | 3 m à 1 cm | 4.10⁻⁷ à 10⁻⁴ | Télévision et Radar |\n| 3.10¹⁰ à 8.10¹¹ | 1 cm à 0,4 mm | 10⁻⁴ à 3.10⁻³ | Micro-ondes |\n| 8.10¹¹ à 4.10¹⁴ | 400 μm à 0,8 μm | 3.10⁻³ à 1,6 | Infrarouge |\n| 4.10¹⁴ à 8.10¹⁴ | 0,8 μm à 0,4 μm | 1,6 à 3,1 | Lumière visible |\n| 8.10¹⁴ à 3.10¹⁶ | 0,4 μm à 10 nm | 3,1 à 120 | Ultraviolet |\n| 3.10¹⁶ à 3.10¹⁸ | 10 nm à 0,1 nm | 120 à 10⁴ | Rayons X mous |\n| 3.10¹⁸ à 3.10²⁰ | 0,1 nm à 1 pm | 10⁴ à 10⁶ | Rayons X durs |\n| 10²¹ | 0,3 pm | 4.10⁶ | Rayons γ |\n| 10²² | 0,03 pm | 4.10⁷ | Rayons cosmiques |",
                "isPerfectTable": true,
                "csv": "\"fréquence de l'onde en Hz\",\"longueur d'onde dans le vide\",\"énergie du photon en eV\",\"Domaine d'application\"\n\"50\",\"6000 km\",\"2.10⁻¹³\",\"Distribution EDF\"\n\"50 à 10⁵\",\"6000 km à 3 km\",\"2.10⁻¹³ à 4.10⁻¹⁰\",\"Fréquences industrielles Téléphonie\"\n\"10⁵ à 4.10⁵\",\"3 km à 800 m\",\"4.10⁻¹⁰ à 2.10⁻⁹\",\"Grandes ondes (LF)\"\n\"10⁶ à 3.10⁶\",\"300 m à 100 m\",\"4.10⁻⁹ à 10⁻⁸\",\"Ondes moyennes (MF)\"\n\"10⁷ à 3.10⁷\",\"30 m à 10 m\",\"4.10⁻⁸ à 10⁻⁷\",\"Ondes courtes (HF)\"\n\"3.10⁷ à 10⁸\",\"10 m à 3 m\",\"10⁻⁷ à 4.10⁻⁷\",\"Modulation de fréquence\"\n\"10⁸ à 3.10¹⁰\",\"3 m à 1 cm\",\"4.10⁻⁷ à 10⁻⁴\",\"Télévision et Radar\"\n\"3.10¹⁰ à 8.10¹¹\",\"1 cm à 0,4 mm\",\"10⁻⁴ à 3.10⁻³\",\"Micro-ondes\"\n\"8.10¹¹ à 4.10¹⁴\",\"400 μm à 0,8 μm\",\"3.10⁻³ à 1,6\",\"Infrarouge\"\n\"4.10¹⁴ à 8.10¹⁴\",\"0,8 μm à 0,4 μm\",\"1,6 à 3,1\",\"Lumière visible\"\n\"8.10¹⁴ à 3.10¹⁶\",\"0,4 μm à 10 nm\",\"3,1 à 120\",\"Ultraviolet\"\n\"3.10¹⁶ à 3.10¹⁸\",\"10 nm à 0,1 nm\",\"120 à 10⁴\",\"Rayons X mous\"\n\"3.10¹⁸ à 3.10²⁰\",\"0,1 nm à 1 pm\",\"10⁴ à 10⁶\",\"Rayons X durs\"\n\"10²¹\",\"0,3 pm\",\"4.10⁶\",\"Rayons γ\"\n\"10²²\",\"0,03 pm\",\"4.10⁷\",\"Rayons cosmiques\"",
                "bBox": {
                    "x": 112,
                    "y": 90,
                    "w": 382.11,
                    "h": 681.93
                }
            },
            {
                "type": "text",
                "value": "Domaines d'applications des ondes électromagnétiques.\n\nEn notation réelle, le champ électrique pourra s'écrire :\n\n$$\\vec{E}(z,t) = \\vec{E_0} \\cos(\\omega(t - \\frac{z}{c})) = \\vec{E_0} \\cos(\\omega t - kz)$$\n\nAvec :\n\n$$\\vec{k} = k\\vec{u_z} = \\frac{\\omega}{c}\\vec{u_z} \\quad \\text{(vecteur d'onde)}$$\n\nEn notation complexe, on notera le champ EM sous la forme :\n\n$$\\vec{E}(z,t) = \\vec{E_0} e^{i(\\omega t - kz)} \\quad \\text{et} \\quad \\vec{B}(z,t) = \\vec{B_0} e^{i(\\omega t - kz)}$$\n\nSi la direction de l'onde est quelconque, dans la direction du vecteur unitaire $\\vec{u}$ :\n\n$$\\vec{E}(x,y,z,t) = \\vec{E_0} e^{i(\\omega t - \\vec{k}.\\vec{r})} \\quad \\text{et} \\quad \\vec{B}(x,y,z,t) = \\vec{B_0} e^{i(\\omega t - \\vec{k}.\\vec{r})}$$\n\noù $\\vec{k} = k \\vec{u}$ ($\\vec{u}$ vecteur unitaire donnant le sens de propagation) est le vecteur d'onde et $\\vec{r} = \\vec{OM}$ (O, origine du repère et M le point d'observation).\n\nL'expression du Laplacien devient :\n\n$$\\Delta \\vec{E} = -(k_x^2 + k_y^2 + k_z^2) \\vec{E} = -k^2 \\vec{E}$$\n\n11",
                "md": "Domaines d'applications des ondes électromagnétiques.\n\nEn notation réelle, le champ électrique pourra s'écrire :\n\n$$\\vec{E}(z,t) = \\vec{E_0} \\cos(\\omega(t - \\frac{z}{c})) = \\vec{E_0} \\cos(\\omega t - kz)$$\n\nAvec :\n\n$$\\vec{k} = k\\vec{u_z} = \\frac{\\omega}{c}\\vec{u_z} \\quad \\text{(vecteur d'onde)}$$\n\nEn notation complexe, on notera le champ EM sous la forme :\n\n$$\\vec{E}(z,t) = \\vec{E_0} e^{i(\\omega t - kz)} \\quad \\text{et} \\quad \\vec{B}(z,t) = \\vec{B_0} e^{i(\\omega t - kz)}$$\n\nSi la direction de l'onde est quelconque, dans la direction du vecteur unitaire $\\vec{u}$ :\n\n$$\\vec{E}(x,y,z,t) = \\vec{E_0} e^{i(\\omega t - \\vec{k}.\\vec{r})} \\quad \\text{et} \\quad \\vec{B}(x,y,z,t) = \\vec{B_0} e^{i(\\omega t - \\vec{k}.\\vec{r})}$$\n\noù $\\vec{k} = k \\vec{u}$ ($\\vec{u}$ vecteur unitaire donnant le sens de propagation) est le vecteur d'onde et $\\vec{r} = \\vec{OM}$ (O, origine du repère et M le point d'observation).\n\nL'expression du Laplacien devient :\n\n$$\\Delta \\vec{E} = -(k_x^2 + k_y^2 + k_z^2) \\vec{E} = -k^2 \\vec{E}$$\n\n11",
                "bBox": {
                    "x": 112,
                    "y": 90,
                    "w": 382.11,
                    "h": 721.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 12,
        "text": "Par ailleurs :\n                                                          ∂2Er            r\n                                                          ∂t2   =−ω2     E\nL’équation d’onde de d’Alembert donne alors (relation de dispersion dans le vide) :\n                                   (−k2Er)−c12     (−ω2Er)=0              soit         k2  =ω22\n                                                                                              c\nD’où :                                                     k=ω c\n\n          2 – Structure des ondes planes progressives monochromatiques :\nCompte tenu du choix de la notation complexe, les opérateurs vectoriels se simplifient. En effet,\nen remarquant que :\n                                           ∂rE =(iω)Er            ;        ∂rE  =−ikxEr\n                                           ∂t                               ∂x\n               r     r                   r.ur))=    r\n(En effet, E      =  E0exp(i(ωt       −k           E0  exp(i(ωt−kxx−kyy−kzz))\nIl vient :\n                            divEr=    ∂Ex   + ∂Ey    + ∂Ez   =−ikxEx−ikyEy−ikzEz               =−ik.rEr\n                                       ∂x       ∂y      ∂z\nDe même :\n                                        rotEr=−ir∧Ek      r         et         ∆r=−k2EE    r\nLes quatre équations de Maxwell deviennent ensuite :\n      r       r.Er                r=−ikr.Br=0                  r=−ikr∧Er              r)             r=−ikr∧Br=   1       r)\n divE   =−ik      =0     ;   divB                     ;   rotE                =−(iωB        ;   rotB             c2  (iωE\n\n\n\n\nPar conséquent, on retrouve le caractère transverse des ondes EM planes :\n\n\n\n                                                                 12",
        "md": "Par ailleurs :\n\n$$\\frac{\\partial^2 \\vec{E}}{\\partial t^2} = -\\omega^2 \\vec{E}$$\n\nL'équation d'onde de d'Alembert donne alors (relation de dispersion dans le vide) :\n\n$$(-k^2\\vec{E}) - \\frac{1}{c^2}(-\\omega^2\\vec{E}) = 0 \\quad \\text{soit} \\quad k^2 = \\frac{\\omega^2}{c^2}$$\n\nD'où :\n\n$$k = \\frac{\\omega}{c}$$\n\n## 2 - Structure des ondes planes progressives monochromatiques :\n\nCompte tenu du choix de la notation complexe, les opérateurs vectoriels se simplifient. En effet, en remarquant que :\n\n$$\\frac{\\partial \\vec{E}}{\\partial t} = (i\\omega) \\vec{E} \\quad ; \\quad \\frac{\\partial \\vec{E}}{\\partial x} = -ik_x \\vec{E}$$\n\n(En effet, $\\vec{E} = \\vec{E_0} \\exp(i(\\omega t - \\vec{k}.\\vec{r})) = \\vec{E_0} \\exp(i(\\omega t - k_x x - k_y y - k_z z))$\n\nIl vient :\n\n$$div \\vec{E} = \\frac{\\partial E_x}{\\partial x} + \\frac{\\partial E_y}{\\partial y} + \\frac{\\partial E_z}{\\partial z} = -ik_x E_x - ik_y E_y - ik_z E_z = -i\\vec{k}.\\vec{E}$$\n\nDe même :\n\n$$rot \\vec{E} = -i\\vec{k} \\wedge \\vec{E} \\quad \\text{et} \\quad \\Delta \\vec{E} = -k^2 \\vec{E}$$\n\nLes quatre équations de Maxwell deviennent ensuite :\n\n$$div \\vec{E} = -i\\vec{k}.\\vec{E} = 0 \\quad ; \\quad div \\vec{B} = -i\\vec{k}.\\vec{B} = 0 \\quad ; \\quad rot \\vec{E} = -i\\vec{k} \\wedge \\vec{E} = -(i\\omega \\vec{B}) \\quad ; \\quad rot \\vec{B} = -i\\vec{k} \\wedge \\vec{B} = \\frac{1}{c^2}(i\\omega \\vec{E})$$\n\n| Electromagnetic waves transport energy through empty space stored in the propagating electric and magnetic fields. |\n|-------------------------------------------------------------------------------------------------------------------|\n| Electric field variation                                                                                           |\n| Magnetic field variation is perpendicular to electric field                                                        |\n| A single-frequency electromagnetic wave exhibits a sinusoidal variation of electric and magnetic fields in space   |\n\nPar conséquent, on retrouve le caractère transverse des ondes EM planes :\n\n12",
        "images": [
            {
                "name": "img_p11_2.png",
                "height": 317,
                "width": 442,
                "x": 151.92,
                "y": 509.2796000000001,
                "original_width": 442,
                "original_height": 317
            },
            {
                "name": "page_12.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "Par ailleurs :\n\n$$\\frac{\\partial^2 \\vec{E}}{\\partial t^2} = -\\omega^2 \\vec{E}$$\n\nL'équation d'onde de d'Alembert donne alors (relation de dispersion dans le vide) :\n\n$$(-k^2\\vec{E}) - \\frac{1}{c^2}(-\\omega^2\\vec{E}) = 0 \\quad \\text{soit} \\quad k^2 = \\frac{\\omega^2}{c^2}$$\n\nD'où :\n\n$$k = \\frac{\\omega}{c}$$",
                "md": "Par ailleurs :\n\n$$\\frac{\\partial^2 \\vec{E}}{\\partial t^2} = -\\omega^2 \\vec{E}$$\n\nL'équation d'onde de d'Alembert donne alors (relation de dispersion dans le vide) :\n\n$$(-k^2\\vec{E}) - \\frac{1}{c^2}(-\\omega^2\\vec{E}) = 0 \\quad \\text{soit} \\quad k^2 = \\frac{\\omega^2}{c^2}$$\n\nD'où :\n\n$$k = \\frac{\\omega}{c}$$",
                "bBox": {
                    "x": 89,
                    "y": 94,
                    "w": 393.01,
                    "h": 401.02
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "2 - Structure des ondes planes progressives monochromatiques :",
                "md": "## 2 - Structure des ondes planes progressives monochromatiques :",
                "bBox": {
                    "x": 89,
                    "y": 94,
                    "w": 338.12,
                    "h": 399.02
                }
            },
            {
                "type": "text",
                "value": "Compte tenu du choix de la notation complexe, les opérateurs vectoriels se simplifient. En effet, en remarquant que :\n\n$$\\frac{\\partial \\vec{E}}{\\partial t} = (i\\omega) \\vec{E} \\quad ; \\quad \\frac{\\partial \\vec{E}}{\\partial x} = -ik_x \\vec{E}$$\n\n(En effet, $\\vec{E} = \\vec{E_0} \\exp(i(\\omega t - \\vec{k}.\\vec{r})) = \\vec{E_0} \\exp(i(\\omega t - k_x x - k_y y - k_z z))$\n\nIl vient :\n\n$$div \\vec{E} = \\frac{\\partial E_x}{\\partial x} + \\frac{\\partial E_y}{\\partial y} + \\frac{\\partial E_z}{\\partial z} = -ik_x E_x - ik_y E_y - ik_z E_z = -i\\vec{k}.\\vec{E}$$\n\nDe même :\n\n$$rot \\vec{E} = -i\\vec{k} \\wedge \\vec{E} \\quad \\text{et} \\quad \\Delta \\vec{E} = -k^2 \\vec{E}$$\n\nLes quatre équations de Maxwell deviennent ensuite :\n\n$$div \\vec{E} = -i\\vec{k}.\\vec{E} = 0 \\quad ; \\quad div \\vec{B} = -i\\vec{k}.\\vec{B} = 0 \\quad ; \\quad rot \\vec{E} = -i\\vec{k} \\wedge \\vec{E} = -(i\\omega \\vec{B}) \\quad ; \\quad rot \\vec{B} = -i\\vec{k} \\wedge \\vec{B} = \\frac{1}{c^2}(i\\omega \\vec{E})$$",
                "md": "Compte tenu du choix de la notation complexe, les opérateurs vectoriels se simplifient. En effet, en remarquant que :\n\n$$\\frac{\\partial \\vec{E}}{\\partial t} = (i\\omega) \\vec{E} \\quad ; \\quad \\frac{\\partial \\vec{E}}{\\partial x} = -ik_x \\vec{E}$$\n\n(En effet, $\\vec{E} = \\vec{E_0} \\exp(i(\\omega t - \\vec{k}.\\vec{r})) = \\vec{E_0} \\exp(i(\\omega t - k_x x - k_y y - k_z z))$\n\nIl vient :\n\n$$div \\vec{E} = \\frac{\\partial E_x}{\\partial x} + \\frac{\\partial E_y}{\\partial y} + \\frac{\\partial E_z}{\\partial z} = -ik_x E_x - ik_y E_y - ik_z E_z = -i\\vec{k}.\\vec{E}$$\n\nDe même :\n\n$$rot \\vec{E} = -i\\vec{k} \\wedge \\vec{E} \\quad \\text{et} \\quad \\Delta \\vec{E} = -k^2 \\vec{E}$$\n\nLes quatre équations de Maxwell deviennent ensuite :\n\n$$div \\vec{E} = -i\\vec{k}.\\vec{E} = 0 \\quad ; \\quad div \\vec{B} = -i\\vec{k}.\\vec{B} = 0 \\quad ; \\quad rot \\vec{E} = -i\\vec{k} \\wedge \\vec{E} = -(i\\omega \\vec{B}) \\quad ; \\quad rot \\vec{B} = -i\\vec{k} \\wedge \\vec{B} = \\frac{1}{c^2}(i\\omega \\vec{E})$$",
                "bBox": {
                    "x": 70,
                    "y": 94,
                    "w": 456.55,
                    "h": 408.02
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "Electromagnetic waves transport energy through empty space stored in the propagating electric and magnetic fields."
                    ],
                    [
                        "Electric field variation"
                    ],
                    [
                        "Magnetic field variation is perpendicular to electric field"
                    ],
                    [
                        "A single-frequency electromagnetic wave exhibits a sinusoidal variation of electric and magnetic fields in space"
                    ]
                ],
                "md": "| Electromagnetic waves transport energy through empty space stored in the propagating electric and magnetic fields. |\n|-------------------------------------------------------------------------------------------------------------------|\n| Electric field variation                                                                                           |\n| Magnetic field variation is perpendicular to electric field                                                        |\n| A single-frequency electromagnetic wave exhibits a sinusoidal variation of electric and magnetic fields in space   |",
                "isPerfectTable": true,
                "csv": "\"Electromagnetic waves transport energy through empty space stored in the propagating electric and magnetic fields.\"\n\"Electric field variation\"\n\"Magnetic field variation is perpendicular to electric field\"\n\"A single-frequency electromagnetic wave exhibits a sinusoidal variation of electric and magnetic fields in space\"",
                "bBox": {
                    "x": 89,
                    "y": 94,
                    "w": 344,
                    "h": 399.02
                }
            },
            {
                "type": "text",
                "value": "Par conséquent, on retrouve le caractère transverse des ondes EM planes :\n\n12",
                "md": "Par conséquent, on retrouve le caractère transverse des ondes EM planes :\n\n12",
                "bBox": {
                    "x": 89,
                    "y": 94,
                    "w": 393.01,
                    "h": 717.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 13,
        "text": "                                               kr.Er=0            et           kr.Br=0\nOn retrouve également :\n                                                        r    r     r=          r\n                                                        B=ω∧Ek         1r∧E\n                                                                       cu\nRemarque : cette relation n’est vérifiée évidemment que par des ondes planes monochromatiques\nharmoniques.  Notamment,  lorsque  l’amplitude  de  l’onde  dépendra  des  coordonnées  d’espace  x\nou y, la relation entre le champ E et le champ B sera différente.\n\n           3 – Propagation de l’énergie :\nLes résultats qui suivent sont valables pour une onde plane progressive, non forcément sinusoïdale (ou harmonique).\nLa densité d’énergie uem pour une onde plane progressive vaut :\n                                                     uem   = 1ε0Er2    +2μ01   Br2\n                                                             2\n\n\n\nCompte tenu de E = Bc, il vient (et avec c=                       1     ) :\n                                                                ε0μ0\n                                                       uem  =ε0Er2    =   1 Br2\n                                                                         μ0\nOn  remarque  qu’il  y  a  équipartition  des  contributions  électrique  et  magnétique  à  cette  densité\nd’énergie.\n\nLe vecteur de Poynting vaut :\n                                                             Π=r   Er∧B r\n                                                                     μ0\n                r=ucrz     r :\nSoit, avec B            ∧E\n                                 Π=r    1    Er∧(rzu  ∧Er)=      1  Er2  urz         (carEr.uzr   =0)\n                                       cμ0                     cμ0\nFinalement :                                         r          r2  rz          urz\n                                                     Π=ε0cE         u  =cuem\nLe  vecteur  de  Poynting  est  bien  colinéaire  à  la  direction  de  propagation ;  si  l’on  revient  à  la\ndéfinition du vecteur densité de courant :                      jr=  ρvr\ncorrespondant à un mouvement d’ensemble de charges de densité ρ à la vitesse  vr =cuem u                           r , on constate\nque  la  relation Π                rz  exprime  simplement  que  l’onde  EM  plane  progressive  dans  le  vide\ntransporte l’énergie dans sa propre direction de propagation et avec une vitesse égale à sa célérité r\nc (vrem   =  Π/uEM      =  crz). u\n\n\n\n\n\n                                                                  13",
        "md": "$$\\vec{k}.\\vec{E} = 0 \\quad \\text{et} \\quad \\vec{k}.\\vec{B} = 0$$\n\nOn retrouve également :\n\n$$\\vec{B} = \\frac{\\vec{k}}{\\omega} \\wedge \\vec{E} = \\frac{1}{c} \\vec{u} \\wedge \\vec{E}$$\n\nRemarque : cette relation n'est vérifiée évidemment que par des ondes planes monochromatiques harmoniques. Notamment, lorsque l'amplitude de l'onde dépendra des coordonnées d'espace x ou y, la relation entre le champ E et le champ B sera différente.\n\n## 3 – Propagation de l'énergie :\n\n*Les résultats qui suivent sont valables pour une onde plane progressive, non forcément sinusoïdale (ou harmonique).*\n\nLa densité d'énergie u<sub>em</sub> pour une onde plane progressive vaut :\n\n$$u_{em} = \\frac{1}{2} \\varepsilon_0 \\vec{E}^2 + \\frac{1}{2\\mu_0} \\vec{B}^2$$\n\nCompte tenu de E = Bc, il vient (et avec $c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}}$) :\n\n$$u_{em} = \\varepsilon_0 \\vec{E}^2 = \\frac{1}{\\mu_0} \\vec{B}^2$$\n\nOn remarque qu'il y a équipartition des contributions électrique et magnétique à cette densité d'énergie.\n\nLe vecteur de Poynting vaut :\n\n$$\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$$\n\nSoit, avec $\\vec{B} = \\frac{\\vec{u}_z}{c} \\wedge \\vec{E}$ :\n\n$$\\vec{\\Pi} = \\frac{1}{c\\mu_0} \\vec{E} \\wedge (\\vec{u}_z \\wedge \\vec{E}) = \\frac{1}{c\\mu_0} \\vec{E}^2 \\vec{u}_z \\quad (\\text{car } \\vec{E}.\\vec{u}_z = 0)$$\n\nFinalement :\n\n$$\\vec{\\Pi} = \\varepsilon_0 c \\vec{E}^2 \\vec{u}_z = cu_{em} \\vec{u}_z$$\n\nLe vecteur de Poynting est bien colinéaire à la direction de propagation ; si l'on revient à la définition du vecteur densité de courant :\n\n$$\\vec{j} = \\rho \\vec{v}$$\n\ncorrespondant à un mouvement d'ensemble de charges de densité ρ à la vitesse $\\vec{v} = cu_{em} \\vec{u}_z$, on constate que la relation $\\vec{\\Pi} = cu_{em} \\vec{u}_z$ exprime simplement que l'onde EM plane progressive dans le vide transporte l'énergie dans sa propre direction de propagation et avec une vitesse égale à sa célérité c ($\\vec{v}_{em} = \\vec{\\Pi}/u_{EM} = c\\vec{u}_z$).",
        "images": [
            {
                "name": "page_13.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$\\vec{k}.\\vec{E} = 0 \\quad \\text{et} \\quad \\vec{k}.\\vec{B} = 0$$\n\nOn retrouve également :\n\n$$\\vec{B} = \\frac{\\vec{k}}{\\omega} \\wedge \\vec{E} = \\frac{1}{c} \\vec{u} \\wedge \\vec{E}$$\n\nRemarque : cette relation n'est vérifiée évidemment que par des ondes planes monochromatiques harmoniques. Notamment, lorsque l'amplitude de l'onde dépendra des coordonnées d'espace x ou y, la relation entre le champ E et le champ B sera différente.",
                "md": "$$\\vec{k}.\\vec{E} = 0 \\quad \\text{et} \\quad \\vec{k}.\\vec{B} = 0$$\n\nOn retrouve également :\n\n$$\\vec{B} = \\frac{\\vec{k}}{\\omega} \\wedge \\vec{E} = \\frac{1}{c} \\vec{u} \\wedge \\vec{E}$$\n\nRemarque : cette relation n'est vérifiée évidemment que par des ondes planes monochromatiques harmoniques. Notamment, lorsque l'amplitude de l'onde dépendra des coordonnées d'espace x ou y, la relation entre le champ E et le champ B sera différente.",
                "bBox": {
                    "x": 85,
                    "y": 83,
                    "w": 305.11,
                    "h": 652.02
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "3 – Propagation de l'énergie :",
                "md": "## 3 – Propagation de l'énergie :",
                "bBox": {
                    "x": 114,
                    "y": 117,
                    "w": 276.11,
                    "h": 607.02
                }
            },
            {
                "type": "text",
                "value": "*Les résultats qui suivent sont valables pour une onde plane progressive, non forcément sinusoïdale (ou harmonique).*\n\nLa densité d'énergie u<sub>em</sub> pour une onde plane progressive vaut :\n\n$$u_{em} = \\frac{1}{2} \\varepsilon_0 \\vec{E}^2 + \\frac{1}{2\\mu_0} \\vec{B}^2$$\n\nCompte tenu de E = Bc, il vient (et avec $c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}}$) :\n\n$$u_{em} = \\varepsilon_0 \\vec{E}^2 = \\frac{1}{\\mu_0} \\vec{B}^2$$\n\nOn remarque qu'il y a équipartition des contributions électrique et magnétique à cette densité d'énergie.\n\nLe vecteur de Poynting vaut :\n\n$$\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$$\n\nSoit, avec $\\vec{B} = \\frac{\\vec{u}_z}{c} \\wedge \\vec{E}$ :\n\n$$\\vec{\\Pi} = \\frac{1}{c\\mu_0} \\vec{E} \\wedge (\\vec{u}_z \\wedge \\vec{E}) = \\frac{1}{c\\mu_0} \\vec{E}^2 \\vec{u}_z \\quad (\\text{car } \\vec{E}.\\vec{u}_z = 0)$$\n\nFinalement :\n\n$$\\vec{\\Pi} = \\varepsilon_0 c \\vec{E}^2 \\vec{u}_z = cu_{em} \\vec{u}_z$$\n\nLe vecteur de Poynting est bien colinéaire à la direction de propagation ; si l'on revient à la définition du vecteur densité de courant :\n\n$$\\vec{j} = \\rho \\vec{v}$$\n\ncorrespondant à un mouvement d'ensemble de charges de densité ρ à la vitesse $\\vec{v} = cu_{em} \\vec{u}_z$, on constate que la relation $\\vec{\\Pi} = cu_{em} \\vec{u}_z$ exprime simplement que l'onde EM plane progressive dans le vide transporte l'énergie dans sa propre direction de propagation et avec une vitesse égale à sa célérité c ($\\vec{v}_{em} = \\vec{\\Pi}/u_{EM} = c\\vec{u}_z$).",
                "md": "*Les résultats qui suivent sont valables pour une onde plane progressive, non forcément sinusoïdale (ou harmonique).*\n\nLa densité d'énergie u<sub>em</sub> pour une onde plane progressive vaut :\n\n$$u_{em} = \\frac{1}{2} \\varepsilon_0 \\vec{E}^2 + \\frac{1}{2\\mu_0} \\vec{B}^2$$\n\nCompte tenu de E = Bc, il vient (et avec $c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}}$) :\n\n$$u_{em} = \\varepsilon_0 \\vec{E}^2 = \\frac{1}{\\mu_0} \\vec{B}^2$$\n\nOn remarque qu'il y a équipartition des contributions électrique et magnétique à cette densité d'énergie.\n\nLe vecteur de Poynting vaut :\n\n$$\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$$\n\nSoit, avec $\\vec{B} = \\frac{\\vec{u}_z}{c} \\wedge \\vec{E}$ :\n\n$$\\vec{\\Pi} = \\frac{1}{c\\mu_0} \\vec{E} \\wedge (\\vec{u}_z \\wedge \\vec{E}) = \\frac{1}{c\\mu_0} \\vec{E}^2 \\vec{u}_z \\quad (\\text{car } \\vec{E}.\\vec{u}_z = 0)$$\n\nFinalement :\n\n$$\\vec{\\Pi} = \\varepsilon_0 c \\vec{E}^2 \\vec{u}_z = cu_{em} \\vec{u}_z$$\n\nLe vecteur de Poynting est bien colinéaire à la direction de propagation ; si l'on revient à la définition du vecteur densité de courant :\n\n$$\\vec{j} = \\rho \\vec{v}$$\n\ncorrespondant à un mouvement d'ensemble de charges de densité ρ à la vitesse $\\vec{v} = cu_{em} \\vec{u}_z$, on constate que la relation $\\vec{\\Pi} = cu_{em} \\vec{u}_z$ exprime simplement que l'onde EM plane progressive dans le vide transporte l'énergie dans sa propre direction de propagation et avec une vitesse égale à sa célérité c ($\\vec{v}_{em} = \\vec{\\Pi}/u_{EM} = c\\vec{u}_z$).",
                "bBox": {
                    "x": 85,
                    "y": 83,
                    "w": 305.11,
                    "h": 652.02
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 14,
        "text": "Remarque :\nOn peut retrouver ce résultat en considérant le cylindre de section droite (S) de génératrices de\nlongueur  vemdt  parallèles  à  la  direction  de  propagation.  L’énergie  qui  va  traverser  cette  surface\npendant dt est alors uemvemSdt. Elle est par ailleurs égale au flux du vecteur de Poynting (multiplié\npar dt), soit :\n                                  uemvemSdt     =ΠSdt             soit        vem   =   Π    =c\n                                                                                       uem\n\nVecteur de Poynting moyen et puissance moyenne reçue par un détecteur :\nLes ondes EM ont généralement des fréquences élevées. Les détecteurs ne sont souvent sensibles\nqu’aux valeurs moyennes temporelles de la puissance qu’ils reçoivent.\nAinsi,  la  puissance  moyenne  reçue  par  un  détecteur  dont  la  surface  S  est  perpendiculaire  à  la\ndirection de propagation est :\n                                                            r     rz\n                                                    Pm  =   Π  .Su    =  Π.S\noù  Π  désigne la valeur algébrique du vecteur de Poynting moyen, égale à :\n                                                         Π   =ε0c     E2\nPour un champ électrique de la forme E=                  E0  cos(ωt−krr−ϕ0), .r       E2   =  E20   et :\n                                                                                               2\n                                                          Π   =ε0c    E02\n                                                                       2\n\nUtilisation de la notation complexe pour la puissance :\nSi f et g sont deux fonctions sinusoïdales en notation complexe, alors la partie réelle moyenne du\nproduit fg est :\n                                                      fg =21Re(f.g*)\noù   g* est le conjugué de g.\nOn peut notamment appliquer cette formule pour calculer la puissance moyenne en électricité :\n                               P  =   ui   =  1Re(u.*)=i        1UmImcosϕ          =UeIecosϕ\n                                              2                 2\nLa valeur moyenne de la densité d’énergie EM est alors :\n                                     eem   =  2⌈ε0\n                                              1⌊⌊     1Re(Er.Er*)+μ01         1Re(Br.Br*)⌋⌉\n                                                                                              ⌋\n                                                ⎜     2                       2               ⎝\nSoit :\n                                        eem   = 1⌊2\n                                                   2⌈1ε0E2⌊\n                                                    ⎜         0 +2μ01     B20 ⌉=\n                                                                              ⌋\n                                                                              ⌋\n                                                                              ⎝    1ε0E2\n                                                                                   2       0\n\n\n\n                                                                14",
        "md": "Remarque :\n\nOn peut retrouver ce résultat en considérant le cylindre de section droite (S) de génératrices de longueur v<sub>em</sub>dt parallèles à la direction de propagation. L'énergie qui va traverser cette surface pendant dt est alors u<sub>em</sub>v<sub>em</sub>Sdt. Elle est par ailleurs égale au flux du vecteur de Poynting (multiplié par dt), soit :\n\n$$u_{em}v_{em}Sdt = \\Pi Sdt \\quad \\text{soit} \\quad v_{em} = \\frac{\\Pi}{u_{em}} = c$$\n\nVecteur de Poynting moyen et puissance moyenne reçue par un détecteur :\n\nLes ondes EM ont généralement des fréquences élevées. Les détecteurs ne sont souvent sensibles qu'aux valeurs moyennes temporelles de la puissance qu'ils reçoivent.\n\nAinsi, la puissance moyenne reçue par un détecteur dont la surface S est perpendiculaire à la direction de propagation est :\n\n$$P_m = \\langle\\vec{\\Pi}\\rangle \\cdot S\\vec{u_z} = \\langle\\Pi\\rangle S$$\n\noù $\\langle\\Pi\\rangle$ désigne la valeur algébrique du vecteur de Poynting moyen, égale à :\n\n$$\\langle\\Pi\\rangle = \\varepsilon_0 c \\langle E^2 \\rangle$$\n\nPour un champ électrique de la forme $E = E_0 \\cos(\\omega t - \\vec{k}\\cdot\\vec{r} - \\varphi_0)$, $\\langle E^2 \\rangle = \\frac{E_0^2}{2}$ et :\n\n$$\\langle\\Pi\\rangle = \\varepsilon_0 c \\frac{E_0^2}{2}$$\n\nUtilisation de la notation complexe pour la puissance :\n\nSi f et g sont deux fonctions sinusoïdales en notation complexe, alors la partie réelle moyenne du produit fg est :\n\n$$\\langle fg \\rangle = \\frac{1}{2}\\text{Re}(f \\cdot g^*)$$\n\noù $g^*$ est le conjugué de g.\n\nOn peut notamment appliquer cette formule pour calculer la puissance moyenne en électricité :\n\n$$P = \\langle ui \\rangle = \\frac{1}{2}\\text{Re}(u \\cdot i^*) = \\frac{1}{2}U_m I_m \\cos \\varphi = U_e I_e \\cos \\varphi$$\n\nLa valeur moyenne de la densité d'énergie EM est alors :\n\n$$\\langle e_{em} \\rangle = \\frac{1}{2}\\left(\\varepsilon_0 \\frac{1}{2}\\text{Re}(\\vec{E}\\cdot\\vec{E}^*) + \\frac{1}{\\mu_0} \\frac{1}{2}\\text{Re}(\\vec{B}\\cdot\\vec{B}^*)\\right)$$\n\nSoit :\n\n$$\\langle e_{em} \\rangle = \\frac{1}{2}\\left(\\frac{1}{2}\\varepsilon_0 E_0^2 + \\frac{1}{2\\mu_0} B_0^2\\right) = \\frac{1}{2}\\varepsilon_0 E_0^2$$",
        "images": [
            {
                "name": "page_14.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "Remarque :\n\nOn peut retrouver ce résultat en considérant le cylindre de section droite (S) de génératrices de longueur v<sub>em</sub>dt parallèles à la direction de propagation. L'énergie qui va traverser cette surface pendant dt est alors u<sub>em</sub>v<sub>em</sub>Sdt. Elle est par ailleurs égale au flux du vecteur de Poynting (multiplié par dt), soit :\n\n$$u_{em}v_{em}Sdt = \\Pi Sdt \\quad \\text{soit} \\quad v_{em} = \\frac{\\Pi}{u_{em}} = c$$\n\nVecteur de Poynting moyen et puissance moyenne reçue par un détecteur :\n\nLes ondes EM ont généralement des fréquences élevées. Les détecteurs ne sont souvent sensibles qu'aux valeurs moyennes temporelles de la puissance qu'ils reçoivent.\n\nAinsi, la puissance moyenne reçue par un détecteur dont la surface S est perpendiculaire à la direction de propagation est :\n\n$$P_m = \\langle\\vec{\\Pi}\\rangle \\cdot S\\vec{u_z} = \\langle\\Pi\\rangle S$$\n\noù $\\langle\\Pi\\rangle$ désigne la valeur algébrique du vecteur de Poynting moyen, égale à :\n\n$$\\langle\\Pi\\rangle = \\varepsilon_0 c \\langle E^2 \\rangle$$\n\nPour un champ électrique de la forme $E = E_0 \\cos(\\omega t - \\vec{k}\\cdot\\vec{r} - \\varphi_0)$, $\\langle E^2 \\rangle = \\frac{E_0^2}{2}$ et :\n\n$$\\langle\\Pi\\rangle = \\varepsilon_0 c \\frac{E_0^2}{2}$$\n\nUtilisation de la notation complexe pour la puissance :\n\nSi f et g sont deux fonctions sinusoïdales en notation complexe, alors la partie réelle moyenne du produit fg est :\n\n$$\\langle fg \\rangle = \\frac{1}{2}\\text{Re}(f \\cdot g^*)$$\n\noù $g^*$ est le conjugué de g.\n\nOn peut notamment appliquer cette formule pour calculer la puissance moyenne en électricité :\n\n$$P = \\langle ui \\rangle = \\frac{1}{2}\\text{Re}(u \\cdot i^*) = \\frac{1}{2}U_m I_m \\cos \\varphi = U_e I_e \\cos \\varphi$$\n\nLa valeur moyenne de la densité d'énergie EM est alors :\n\n$$\\langle e_{em} \\rangle = \\frac{1}{2}\\left(\\varepsilon_0 \\frac{1}{2}\\text{Re}(\\vec{E}\\cdot\\vec{E}^*) + \\frac{1}{\\mu_0} \\frac{1}{2}\\text{Re}(\\vec{B}\\cdot\\vec{B}^*)\\right)$$\n\nSoit :\n\n$$\\langle e_{em} \\rangle = \\frac{1}{2}\\left(\\frac{1}{2}\\varepsilon_0 E_0^2 + \\frac{1}{2\\mu_0} B_0^2\\right) = \\frac{1}{2}\\varepsilon_0 E_0^2$$",
                "md": "Remarque :\n\nOn peut retrouver ce résultat en considérant le cylindre de section droite (S) de génératrices de longueur v<sub>em</sub>dt parallèles à la direction de propagation. L'énergie qui va traverser cette surface pendant dt est alors u<sub>em</sub>v<sub>em</sub>Sdt. Elle est par ailleurs égale au flux du vecteur de Poynting (multiplié par dt), soit :\n\n$$u_{em}v_{em}Sdt = \\Pi Sdt \\quad \\text{soit} \\quad v_{em} = \\frac{\\Pi}{u_{em}} = c$$\n\nVecteur de Poynting moyen et puissance moyenne reçue par un détecteur :\n\nLes ondes EM ont généralement des fréquences élevées. Les détecteurs ne sont souvent sensibles qu'aux valeurs moyennes temporelles de la puissance qu'ils reçoivent.\n\nAinsi, la puissance moyenne reçue par un détecteur dont la surface S est perpendiculaire à la direction de propagation est :\n\n$$P_m = \\langle\\vec{\\Pi}\\rangle \\cdot S\\vec{u_z} = \\langle\\Pi\\rangle S$$\n\noù $\\langle\\Pi\\rangle$ désigne la valeur algébrique du vecteur de Poynting moyen, égale à :\n\n$$\\langle\\Pi\\rangle = \\varepsilon_0 c \\langle E^2 \\rangle$$\n\nPour un champ électrique de la forme $E = E_0 \\cos(\\omega t - \\vec{k}\\cdot\\vec{r} - \\varphi_0)$, $\\langle E^2 \\rangle = \\frac{E_0^2}{2}$ et :\n\n$$\\langle\\Pi\\rangle = \\varepsilon_0 c \\frac{E_0^2}{2}$$\n\nUtilisation de la notation complexe pour la puissance :\n\nSi f et g sont deux fonctions sinusoïdales en notation complexe, alors la partie réelle moyenne du produit fg est :\n\n$$\\langle fg \\rangle = \\frac{1}{2}\\text{Re}(f \\cdot g^*)$$\n\noù $g^*$ est le conjugué de g.\n\nOn peut notamment appliquer cette formule pour calculer la puissance moyenne en électricité :\n\n$$P = \\langle ui \\rangle = \\frac{1}{2}\\text{Re}(u \\cdot i^*) = \\frac{1}{2}U_m I_m \\cos \\varphi = U_e I_e \\cos \\varphi$$\n\nLa valeur moyenne de la densité d'énergie EM est alors :\n\n$$\\langle e_{em} \\rangle = \\frac{1}{2}\\left(\\varepsilon_0 \\frac{1}{2}\\text{Re}(\\vec{E}\\cdot\\vec{E}^*) + \\frac{1}{\\mu_0} \\frac{1}{2}\\text{Re}(\\vec{B}\\cdot\\vec{B}^*)\\right)$$\n\nSoit :\n\n$$\\langle e_{em} \\rangle = \\frac{1}{2}\\left(\\frac{1}{2}\\varepsilon_0 E_0^2 + \\frac{1}{2\\mu_0} B_0^2\\right) = \\frac{1}{2}\\varepsilon_0 E_0^2$$",
                "bBox": {
                    "x": 70,
                    "y": 101,
                    "w": 457.26,
                    "h": 661.01
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 15,
        "text": "La valeur moyenne du vecteur de Poynting se calcule de la même manière :\n                                         r        1Re(μ01         r∧Br*)=             1    Re(r∧(ur               r*))\n                                         Π     =  2               E                 2μ0           E       c   ∧E\nSoit :\n                                             r           1     Re(r.Er*r−E.rEru            r*)=      1ε0cE2ur\n                                            Π     =                   E       u                                  0\n                                                      2cμ0                                           2\n\nOrdres de grandeur :\n      •      Amplitudes des champs EM d’un faisceau laser :\nUn  laser  hélium-néon  émet  un  faisceau  cylindrique  de  section  droite  1 mm 2 et  de  puissance\n1 mW. Il produit une onde polarisée rectilignement. Déterminer l’amplitude des champs EM.\nL’onde  est  quasi-plane  sinusoïdale  car  la  largeur  du  faisceau  est  bien  supérieure  à  la  longueur\nd’onde. Les champs EM valent :\n                            E0   =      2μ0cP        =8,7.102V.m−1                     ;         B0    =   E0    =2,9.10−6T\n                                            S                                                               c\n      •      Emission d’une station radio :\nUne  source  d’onde  EM  monochromatique  (E)  située  dans  une  plaine  émet  un  rayonnement\nisotrope polarisé rectilignement de puissance 1 MW. Calculer l’amplitude du champ électrique à la\ndistance r puis à 1 000 km.\nOn trouve :\n                        E0   =      μ0cP      1   =1,1.1041V.m−1                            (1,1.10−2V.m−1           à1000km)\n                                       π       r                  r\n\nIV – Polarisation des ondes EM :\n             1 – Représentation                     vectorielle             réelle          d’une            onde           plane          progressive\n             monochromatique :\nOn considère une onde EM plane progressive monochromatique de pulsation  ω se propageant\ndans le vide. On choisit l’axe (Oz) comme l’axe de propagation, soit kr=ω                                                 urz.\n                                                                                                                       c\nEn notation complexe, le champ électrique de l’onde est :\n                                                                      r=E0ei(ωt−kz) r\n                                                                     E\nOn note :\n                                                           r   =E0xe−iϕxurx        +E0ye−iϕyury\n                                                          E0\noù E0x et E0y sont (moyennant un bon choix des phases    et   ) des constantes positives. ϕx          ϕy\nDe plus, par un choix judicieux de l’origine des temps, on choisira ϕx                                               =0 et on notera ϕ =ϕy le\ndéphasage de E par rapport à Ex.  y\nAlors, en notation réelle :\n\n\n\n                                                                              15",
        "md": "La valeur moyenne du vecteur de Poynting se calcule de la même manière :\n\n$$\\langle\\vec{\\Pi}\\rangle = \\frac{1}{2}\\text{Re}(\\frac{1}{\\mu_0}\\vec{E}\\wedge\\vec{B}^*) = \\frac{1}{2\\mu_0}\\text{Re}(\\vec{E}\\wedge(\\frac{\\vec{u}}{c}\\wedge\\vec{E}^*))$$\n\nSoit :\n\n$$\\langle\\vec{\\Pi}\\rangle = \\frac{1}{2c\\mu_0}\\text{Re}(\\vec{E}.\\vec{E}^*\\vec{u}-\\vec{E}.\\vec{u}\\vec{E}^*) = \\frac{1}{2}\\varepsilon_0cE_0^2\\vec{u}$$\n\nOrdres de grandeur :\n\n- Amplitudes des champs EM d'un faisceau laser :\n\nUn laser hélium-néon émet un faisceau cylindrique de section droite 1 mm² et de puissance 1 mW. Il produit une onde polarisée rectilignement. Déterminer l'amplitude des champs EM.\n\nL'onde est quasi-plane sinusoïdale car la largeur du faisceau est bien supérieure à la longueur d'onde. Les champs EM valent :\n\n$$E_0 = \\sqrt{\\frac{2\\mu_0cP}{S}} = 8,7.10^2V.m^{-1} \\quad ; \\quad B_0 = \\frac{E_0}{c} = 2,9.10^{-6}T$$\n\n- Emission d'une station radio :\n\nUne source d'onde EM monochromatique (E) située dans une plaine émet un rayonnement isotrope polarisé rectilignement de puissance 1 MW. Calculer l'amplitude du champ électrique à la distance r puis à 1 000 km.\n\nOn trouve :\n\n$$E_0 = \\sqrt{\\frac{\\mu_0cP}{\\pi}\\frac{1}{r}} = 1,1.10^4\\frac{1}{r}V.m^{-1} \\quad (1,1.10^{-2}V.m^{-1} \\text{ à } 1000 km)$$\n\n## IV – Polarisation des ondes EM :\n\n### 1 – Représentation vectorielle réelle d'une onde plane progressive monochromatique :\n\nOn considère une onde EM plane progressive monochromatique de pulsation ω se propageant dans le vide. On choisit l'axe (Oz) comme l'axe de propagation, soit $\\vec{k} = \\frac{\\omega}{c}\\vec{u_z}$.\n\nEn notation complexe, le champ électrique de l'onde est :\n\n$$\\vec{E} = \\vec{E_0}e^{i(\\omega t-kz)}$$\n\nOn note :\n\n$$\\vec{E_0} = E_{0x}e^{-i\\varphi_x}\\vec{u_x} + E_{0y}e^{-i\\varphi_y}\\vec{u_y}$$\n\noù E₀ₓ et E₀y sont (moyennant un bon choix des phases φₓ et φy) des constantes positives.\n\nDe plus, par un choix judicieux de l'origine des temps, on choisira φₓ = 0 et on notera φ = φy le déphasage de Ey par rapport à Ex.\n\nAlors, en notation réelle :",
        "images": [
            {
                "name": "page_15.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "La valeur moyenne du vecteur de Poynting se calcule de la même manière :\n\n$$\\langle\\vec{\\Pi}\\rangle = \\frac{1}{2}\\text{Re}(\\frac{1}{\\mu_0}\\vec{E}\\wedge\\vec{B}^*) = \\frac{1}{2\\mu_0}\\text{Re}(\\vec{E}\\wedge(\\frac{\\vec{u}}{c}\\wedge\\vec{E}^*))$$\n\nSoit :\n\n$$\\langle\\vec{\\Pi}\\rangle = \\frac{1}{2c\\mu_0}\\text{Re}(\\vec{E}.\\vec{E}^*\\vec{u}-\\vec{E}.\\vec{u}\\vec{E}^*) = \\frac{1}{2}\\varepsilon_0cE_0^2\\vec{u}$$\n\nOrdres de grandeur :\n\n- Amplitudes des champs EM d'un faisceau laser :\n\nUn laser hélium-néon émet un faisceau cylindrique de section droite 1 mm² et de puissance 1 mW. Il produit une onde polarisée rectilignement. Déterminer l'amplitude des champs EM.\n\nL'onde est quasi-plane sinusoïdale car la largeur du faisceau est bien supérieure à la longueur d'onde. Les champs EM valent :\n\n$$E_0 = \\sqrt{\\frac{2\\mu_0cP}{S}} = 8,7.10^2V.m^{-1} \\quad ; \\quad B_0 = \\frac{E_0}{c} = 2,9.10^{-6}T$$\n\n- Emission d'une station radio :\n\nUne source d'onde EM monochromatique (E) située dans une plaine émet un rayonnement isotrope polarisé rectilignement de puissance 1 MW. Calculer l'amplitude du champ électrique à la distance r puis à 1 000 km.\n\nOn trouve :\n\n$$E_0 = \\sqrt{\\frac{\\mu_0cP}{\\pi}\\frac{1}{r}} = 1,1.10^4\\frac{1}{r}V.m^{-1} \\quad (1,1.10^{-2}V.m^{-1} \\text{ à } 1000 km)$$",
                "md": "La valeur moyenne du vecteur de Poynting se calcule de la même manière :\n\n$$\\langle\\vec{\\Pi}\\rangle = \\frac{1}{2}\\text{Re}(\\frac{1}{\\mu_0}\\vec{E}\\wedge\\vec{B}^*) = \\frac{1}{2\\mu_0}\\text{Re}(\\vec{E}\\wedge(\\frac{\\vec{u}}{c}\\wedge\\vec{E}^*))$$\n\nSoit :\n\n$$\\langle\\vec{\\Pi}\\rangle = \\frac{1}{2c\\mu_0}\\text{Re}(\\vec{E}.\\vec{E}^*\\vec{u}-\\vec{E}.\\vec{u}\\vec{E}^*) = \\frac{1}{2}\\varepsilon_0cE_0^2\\vec{u}$$\n\nOrdres de grandeur :\n\n- Amplitudes des champs EM d'un faisceau laser :\n\nUn laser hélium-néon émet un faisceau cylindrique de section droite 1 mm² et de puissance 1 mW. Il produit une onde polarisée rectilignement. Déterminer l'amplitude des champs EM.\n\nL'onde est quasi-plane sinusoïdale car la largeur du faisceau est bien supérieure à la longueur d'onde. Les champs EM valent :\n\n$$E_0 = \\sqrt{\\frac{2\\mu_0cP}{S}} = 8,7.10^2V.m^{-1} \\quad ; \\quad B_0 = \\frac{E_0}{c} = 2,9.10^{-6}T$$\n\n- Emission d'une station radio :\n\nUne source d'onde EM monochromatique (E) située dans une plaine émet un rayonnement isotrope polarisé rectilignement de puissance 1 MW. Calculer l'amplitude du champ électrique à la distance r puis à 1 000 km.\n\nOn trouve :\n\n$$E_0 = \\sqrt{\\frac{\\mu_0cP}{\\pi}\\frac{1}{r}} = 1,1.10^4\\frac{1}{r}V.m^{-1} \\quad (1,1.10^{-2}V.m^{-1} \\text{ à } 1000 km)$$",
                "bBox": {
                    "x": 143,
                    "y": 95,
                    "w": 308.81,
                    "h": 662.96
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "IV – Polarisation des ondes EM :",
                "md": "## IV – Polarisation des ondes EM :",
                "bBox": {
                    "x": 187,
                    "y": 95,
                    "w": 190.91,
                    "h": 590.02
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "1 – Représentation vectorielle réelle d'une onde plane progressive monochromatique :",
                "md": "### 1 – Représentation vectorielle réelle d'une onde plane progressive monochromatique :",
                "bBox": {
                    "x": 106,
                    "y": 95,
                    "w": 420.73,
                    "h": 590.02
                }
            },
            {
                "type": "text",
                "value": "On considère une onde EM plane progressive monochromatique de pulsation ω se propageant dans le vide. On choisit l'axe (Oz) comme l'axe de propagation, soit $\\vec{k} = \\frac{\\omega}{c}\\vec{u_z}$.\n\nEn notation complexe, le champ électrique de l'onde est :\n\n$$\\vec{E} = \\vec{E_0}e^{i(\\omega t-kz)}$$\n\nOn note :\n\n$$\\vec{E_0} = E_{0x}e^{-i\\varphi_x}\\vec{u_x} + E_{0y}e^{-i\\varphi_y}\\vec{u_y}$$\n\noù E₀ₓ et E₀y sont (moyennant un bon choix des phases φₓ et φy) des constantes positives.\n\nDe plus, par un choix judicieux de l'origine des temps, on choisira φₓ = 0 et on notera φ = φy le déphasage de Ey par rapport à Ex.\n\nAlors, en notation réelle :",
                "md": "On considère une onde EM plane progressive monochromatique de pulsation ω se propageant dans le vide. On choisit l'axe (Oz) comme l'axe de propagation, soit $\\vec{k} = \\frac{\\omega}{c}\\vec{u_z}$.\n\nEn notation complexe, le champ électrique de l'onde est :\n\n$$\\vec{E} = \\vec{E_0}e^{i(\\omega t-kz)}$$\n\nOn note :\n\n$$\\vec{E_0} = E_{0x}e^{-i\\varphi_x}\\vec{u_x} + E_{0y}e^{-i\\varphi_y}\\vec{u_y}$$\n\noù E₀ₓ et E₀y sont (moyennant un bon choix des phases φₓ et φy) des constantes positives.\n\nDe plus, par un choix judicieux de l'origine des temps, on choisira φₓ = 0 et on notera φ = φy le déphasage de Ey par rapport à Ex.\n\nAlors, en notation réelle :",
                "bBox": {
                    "x": 143,
                    "y": 95,
                    "w": 383.73,
                    "h": 662.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 16,
        "text": "                                                                                                                  Ex         =       E0xcos(ωt−kz)cos(ωt−kz−ϕ)\n                                                                                                                  Ey          =E0y\n                                                                                                                                                     r=urz∧Er\nLe champ magnétique s’en déduit (à partir de B                                                                                                                      c            ) :\n                                                                                                                  Bx         =−E0y                      cos(ωt−kz)\n                                                                                                                                              c\n                                                                                                                  By         =       E0x          cos(ωt               −kz−ϕ)\n                                                                                                                                         c\n\n                         2 – Polarisation d’une onde plane progressive monochromatique\nPour définir la polarisation d’une onde plane EM progressive harmonique, on se place toujours\ndans un plan de cote z0 donnée, que l’on prendra nulle par exemple.\nPar conséquent, les coordonnées du champ électrique deviennent :\n                                                                                                                          Ex         =E0x               cos(ωt)\n                                                                                                                          Ey         =E0y                cos(ωt              −ϕ)\n\n             •           Polarisation rectiligne :\nLa polarisation rectiligne correspond au cas où le champ électrique garde une direction constante\nau cours du temps, que l’on peut choisir parallèle à l’axe (Ox) :\n                                                                                                                                 Er=E0cosωt                                  urx\nPour un observateur placé dans le plan de cote fixée, le champ oscille en fonction du temps le\nlong de l’axe (Ox).\n\n             •           Polarisation circulaire :\nSi ϕ=−π2                          ou ϕ=                    +π2, les coordonnées E et E du champ électrique sont en quadrature : les axes x             y\nde l’ellipse coïncident avec les axes (Ox) et (Oy).\n\n\n\n                                                                                                                                                        16",
        "md": "$$E_x = E_{0x} \\cos(\\omega t - kz)$$\n$$E_y = E_{0y} \\cos(\\omega t - kz - \\varphi)$$\n\nLe champ magnétique s'en déduit (à partir de $$\\vec{B} = \\frac{\\vec{u_z} \\wedge \\vec{E}}{c}$$) :\n\n$$B_x = -\\frac{E_{0y}}{c}\\cos(\\omega t - kz)$$\n$$B_y = \\frac{E_{0x}}{c}\\cos(\\omega t - kz - \\varphi)$$\n\n## 2 - Polarisation d'une onde plane progressive monochromatique\n\nPour définir la polarisation d'une onde plane EM progressive harmonique, on se place toujours dans un plan de cote z₀ donnée, que l'on prendra nulle par exemple.\n\nPar conséquent, les coordonnées du champ électrique deviennent :\n\n$$E_x = E_{0x} \\cos(\\omega t)$$\n$$E_y = E_{0y} \\cos(\\omega t - \\varphi)$$\n\n- Polarisation rectiligne :\n\nLa polarisation rectiligne correspond au cas où le champ électrique garde une direction constante au cours du temps, que l'on peut choisir parallèle à l'axe (Ox) :\n\n$$\\vec{E} = E_0 \\cos \\omega t \\vec{u_x}$$\n\nPour un observateur placé dans le plan de cote fixée, le champ oscille en fonction du temps le long de l'axe (Ox).\n\n- Polarisation circulaire :\n\nSi $$\\varphi = -\\frac{\\pi}{2}$$ ou $$\\varphi = +\\frac{\\pi}{2}$$, les coordonnées E_x et E_y du champ électrique sont en quadrature : les axes de l'ellipse coïncident avec les axes (Ox) et (Oy).",
        "images": [
            {
                "name": "page_16.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$E_x = E_{0x} \\cos(\\omega t - kz)$$\n$$E_y = E_{0y} \\cos(\\omega t - kz - \\varphi)$$\n\nLe champ magnétique s'en déduit (à partir de $$\\vec{B} = \\frac{\\vec{u_z} \\wedge \\vec{E}}{c}$$) :\n\n$$B_x = -\\frac{E_{0y}}{c}\\cos(\\omega t - kz)$$\n$$B_y = \\frac{E_{0x}}{c}\\cos(\\omega t - kz - \\varphi)$$",
                "md": "$$E_x = E_{0x} \\cos(\\omega t - kz)$$\n$$E_y = E_{0y} \\cos(\\omega t - kz - \\varphi)$$\n\nLe champ magnétique s'en déduit (à partir de $$\\vec{B} = \\frac{\\vec{u_z} \\wedge \\vec{E}}{c}$$) :\n\n$$B_x = -\\frac{E_{0y}}{c}\\cos(\\omega t - kz)$$\n$$B_y = \\frac{E_{0x}}{c}\\cos(\\omega t - kz - \\varphi)$$",
                "bBox": {
                    "x": 252,
                    "y": 83,
                    "w": 80,
                    "h": 472.96
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "2 - Polarisation d'une onde plane progressive monochromatique",
                "md": "## 2 - Polarisation d'une onde plane progressive monochromatique",
                "bBox": {
                    "x": 109,
                    "y": 117,
                    "w": 223,
                    "h": 447.02
                }
            },
            {
                "type": "text",
                "value": "Pour définir la polarisation d'une onde plane EM progressive harmonique, on se place toujours dans un plan de cote z₀ donnée, que l'on prendra nulle par exemple.\n\nPar conséquent, les coordonnées du champ électrique deviennent :\n\n$$E_x = E_{0x} \\cos(\\omega t)$$\n$$E_y = E_{0y} \\cos(\\omega t - \\varphi)$$\n\n- Polarisation rectiligne :\n\nLa polarisation rectiligne correspond au cas où le champ électrique garde une direction constante au cours du temps, que l'on peut choisir parallèle à l'axe (Ox) :\n\n$$\\vec{E} = E_0 \\cos \\omega t \\vec{u_x}$$\n\nPour un observateur placé dans le plan de cote fixée, le champ oscille en fonction du temps le long de l'axe (Ox).\n\n- Polarisation circulaire :\n\nSi $$\\varphi = -\\frac{\\pi}{2}$$ ou $$\\varphi = +\\frac{\\pi}{2}$$, les coordonnées E_x et E_y du champ électrique sont en quadrature : les axes de l'ellipse coïncident avec les axes (Ox) et (Oy).",
                "md": "Pour définir la polarisation d'une onde plane EM progressive harmonique, on se place toujours dans un plan de cote z₀ donnée, que l'on prendra nulle par exemple.\n\nPar conséquent, les coordonnées du champ électrique deviennent :\n\n$$E_x = E_{0x} \\cos(\\omega t)$$\n$$E_y = E_{0y} \\cos(\\omega t - \\varphi)$$\n\n- Polarisation rectiligne :\n\nLa polarisation rectiligne correspond au cas où le champ électrique garde une direction constante au cours du temps, que l'on peut choisir parallèle à l'axe (Ox) :\n\n$$\\vec{E} = E_0 \\cos \\omega t \\vec{u_x}$$\n\nPour un observateur placé dans le plan de cote fixée, le champ oscille en fonction du temps le long de l'axe (Ox).\n\n- Polarisation circulaire :\n\nSi $$\\varphi = -\\frac{\\pi}{2}$$ ou $$\\varphi = +\\frac{\\pi}{2}$$, les coordonnées E_x et E_y du champ électrique sont en quadrature : les axes de l'ellipse coïncident avec les axes (Ox) et (Oy).",
                "bBox": {
                    "x": 70,
                    "y": 83,
                    "w": 456.53,
                    "h": 481.02
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 17,
        "text": "Si ϕ=+π2       :\n                                   Ex   =  E0x  cos(ωt)           et         Ey   =  E0ysin(ωt)\nD’où :\n                                                              2             2\n                                                    ⌈\n                                                    ⌊E0xEx  ⌉\n                                                            ⌋   +⌊⌈\n                                                                   ⌊E0yEy  ⌉\n                                                                           ⌋  =1\n                                                    ⌊\n                                                    ⎜       ⌋\n                                                            ⎝              ⌋\n                                                                   ⎜       ⎝\nC’est bien l’équation d’une ellipse d’axes (Ox) et (Oy), de longueurs E0x et E0y.\nSi de plus les amplitudes E0x et E0y sont identiques égales à E, l’ellipse correspond à un cercle :  0\n                                                          E2x  +E2y   =  E2 0\nLa polarisation de l’onde EM est dite circulaire.\nOn  montre  facilement  que  si ϕ=+π2                 ,  l’onde  est  circulaire  gauche  et  que  si ϕ  =−π2  ,  l’onde  est\ncicutaire droite.\n\nApplication : décomposition d’une onde à polarisation rectiligne comme la superposition\nde deux ondes circulaires :\n       Decomposition d 'une onde a polarisationrectiligne comme Ia superposition\n                 de deux ondes circulaires\n  Le champ electrique d'une onde se propageant dans\n  la direction (Oz) est donne par\n\n\n\n\n                                                                  17",
        "md": "| polarisations circulaires |\n|---------------------------|\n| circulaire gauche φ = π/2 | circulaire droite φ = -π/2 |\n\n| y                         | y                         |\n| E₀                        | E₀                        |\n|                           |                           |\n|                           |                           |\n| -E₀           E₀     x    | -E₀           E₀     x    |\n|                           |                           |\n|                           |                           |\n| -E₀                       | -E₀                       |\n\n| notation réelle           | notation réelle           |\n|---------------------------|---------------------------|\n| E_x = E₀cos(ωt)           | E_x = E₀cos(ωt)           |\n| E_y = E₀sin(ωt)           | E_y = -E₀sin(ωt)          |\n\n| notation complexe         | notation complexe         |\n|---------------------------|---------------------------|\n| E_x = E₀ e^iωt            | E_x = E₀ e^iωt            |\n| E_y = -iE_x = -jE₀ e^iωt  | E_y = jE_x = jE₀ e^iωt    |\n\nSi φ = +π/2 :\n\nE_x = E₀ₓ cos(ωt)    et    E_y = E₀y sin(ωt)\n\nD'où :\n\n$$((\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 = 1$$\n\nC'est bien l'équation d'une ellipse d'axes (Ox) et (Oy), de longueurs E₀ₓ et E₀y.\n\nSi de plus les amplitudes E₀ₓ et E₀y sont identiques égales à E₀, l'ellipse correspond à un cercle :\n\n$$E_x^2 + E_y^2 = E_0^2$$\n\nLa polarisation de l'onde EM est dite circulaire.\n\nOn montre facilement que si φ = +π/2, l'onde est circulaire gauche et que si φ = -π/2, l'onde est circulaire droite.\n\nApplication : décomposition d'une onde à polarisation rectiligne comme la superposition de deux ondes circulaires :\n\nDécomposition d'une onde à polarisation\nrectiligne comme la superposition\nde deux ondes circulaires\n\nLe champ électrique d'une onde se propageant dans\nla direction (Oz) est donné par :\n\n17",
        "images": [
            {
                "name": "img_p16_1.png",
                "height": 648,
                "width": 639,
                "x": 162.84,
                "y": 70.9196,
                "original_width": 639,
                "original_height": 648
            },
            {
                "name": "img_p16_2.png",
                "height": 150,
                "width": 466,
                "x": 70.91951999999999,
                "y": 659.63984,
                "original_width": 466,
                "original_height": 150,
                "ocr": [
                    {
                        "x": 46,
                        "y": 12,
                        "w": 370,
                        "h": 30,
                        "confidence": "0.7101522785133351",
                        "text": "Decomposition d 'une onde a polarisation"
                    },
                    {
                        "x": 78,
                        "y": 40,
                        "w": 306,
                        "h": 29,
                        "confidence": "0.7642007235701719",
                        "text": "rectiligne comme Ia superposition"
                    },
                    {
                        "x": 116,
                        "y": 66,
                        "w": 230,
                        "h": 24,
                        "confidence": "0.8970101529498439",
                        "text": "de deux ondes circulaires"
                    },
                    {
                        "x": 14,
                        "y": 97,
                        "w": 436,
                        "h": 27,
                        "confidence": "0.7234907549028238",
                        "text": "Le champ electrique d'une onde se propageant dans"
                    },
                    {
                        "x": 14,
                        "y": 122,
                        "w": 266,
                        "h": 26,
                        "confidence": "0.7940264290129619",
                        "text": "la direction (Oz) est donne par"
                    }
                ]
            },
            {
                "name": "page_17.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "table",
                "rows": [
                    [
                        "polarisations circulaires"
                    ],
                    [
                        "circulaire gauche φ = π/2",
                        "circulaire droite φ = -π/2"
                    ]
                ],
                "md": "| polarisations circulaires |\n|---------------------------|\n| circulaire gauche φ = π/2 | circulaire droite φ = -π/2 |",
                "isPerfectTable": false,
                "csv": "\"polarisations circulaires\"\n\"circulaire gauche φ = π/2\",\"circulaire droite φ = -π/2\"",
                "bBox": {
                    "x": 109,
                    "y": 375,
                    "w": 358.01,
                    "h": 221.02
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "y",
                        "y"
                    ],
                    [
                        "",
                        ""
                    ],
                    [
                        "",
                        ""
                    ],
                    [
                        "-E₀           E₀     x",
                        "-E₀           E₀     x"
                    ],
                    [
                        "",
                        ""
                    ],
                    [
                        "",
                        ""
                    ],
                    [
                        "-E₀",
                        "-E₀"
                    ]
                ],
                "md": "| y                         | y                         |\n| E₀                        | E₀                        |\n|                           |                           |\n|                           |                           |\n| -E₀           E₀     x    | -E₀           E₀     x    |\n|                           |                           |\n|                           |                           |\n| -E₀                       | -E₀                       |",
                "isPerfectTable": true,
                "csv": "\"y\",\"y\"\n\"\",\"\"\n\"\",\"\"\n\"-E₀           E₀     x\",\"-E₀           E₀     x\"\n\"\",\"\"\n\"\",\"\"\n\"-E₀\",\"-E₀\"",
                "bBox": {
                    "x": 272,
                    "y": 532,
                    "w": 30.11,
                    "h": 7.01
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "notation réelle",
                        "notation réelle"
                    ],
                    [
                        "E_x = E₀cos(ωt)",
                        "E_x = E₀cos(ωt)"
                    ],
                    [
                        "E_y = E₀sin(ωt)",
                        "E_y = -E₀sin(ωt)"
                    ]
                ],
                "md": "| notation réelle           | notation réelle           |\n|---------------------------|---------------------------|\n| E_x = E₀cos(ωt)           | E_x = E₀cos(ωt)           |\n| E_y = E₀sin(ωt)           | E_y = -E₀sin(ωt)          |",
                "isPerfectTable": true,
                "csv": "\"notation réelle\",\"notation réelle\"\n\"E_x = E₀cos(ωt)\",\"E_x = E₀cos(ωt)\"\n\"E_y = E₀sin(ωt)\",\"E_y = -E₀sin(ωt)\"",
                "bBox": {
                    "x": 203,
                    "y": 395,
                    "w": 148.57,
                    "h": 146.01
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "notation complexe",
                        "notation complexe"
                    ],
                    [
                        "E_x = E₀ e^iωt",
                        "E_x = E₀ e^iωt"
                    ],
                    [
                        "E_y = -iE_x = -jE₀ e^iωt",
                        "E_y = jE_x = jE₀ e^iωt"
                    ]
                ],
                "md": "| notation complexe         | notation complexe         |\n|---------------------------|---------------------------|\n| E_x = E₀ e^iωt            | E_x = E₀ e^iωt            |\n| E_y = -iE_x = -jE₀ e^iωt  | E_y = jE_x = jE₀ e^iωt    |",
                "isPerfectTable": true,
                "csv": "\"notation complexe\",\"notation complexe\"\n\"E_x = E₀ e^iωt\",\"E_x = E₀ e^iωt\"\n\"E_y = -iE_x = -jE₀ e^iωt\",\"E_y = jE_x = jE₀ e^iωt\"",
                "bBox": {
                    "x": 187,
                    "y": 395,
                    "w": 164.57,
                    "h": 146.01
                }
            },
            {
                "type": "text",
                "value": "Si φ = +π/2 :\n\nE_x = E₀ₓ cos(ωt)    et    E_y = E₀y sin(ωt)\n\nD'où :\n\n$$((\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 = 1$$\n\nC'est bien l'équation d'une ellipse d'axes (Ox) et (Oy), de longueurs E₀ₓ et E₀y.\n\nSi de plus les amplitudes E₀ₓ et E₀y sont identiques égales à E₀, l'ellipse correspond à un cercle :\n\n$$E_x^2 + E_y^2 = E_0^2$$\n\nLa polarisation de l'onde EM est dite circulaire.\n\nOn montre facilement que si φ = +π/2, l'onde est circulaire gauche et que si φ = -π/2, l'onde est circulaire droite.\n\nApplication : décomposition d'une onde à polarisation rectiligne comme la superposition de deux ondes circulaires :\n\nDécomposition d'une onde à polarisation\nrectiligne comme la superposition\nde deux ondes circulaires\n\nLe champ électrique d'une onde se propageant dans\nla direction (Oz) est donné par :\n\n17",
                "md": "Si φ = +π/2 :\n\nE_x = E₀ₓ cos(ωt)    et    E_y = E₀y sin(ωt)\n\nD'où :\n\n$$((\\frac{E_x}{E_{0x}})^2 + (\\frac{E_y}{E_{0y}})^2 = 1$$\n\nC'est bien l'équation d'une ellipse d'axes (Ox) et (Oy), de longueurs E₀ₓ et E₀y.\n\nSi de plus les amplitudes E₀ₓ et E₀y sont identiques égales à E₀, l'ellipse correspond à un cercle :\n\n$$E_x^2 + E_y^2 = E_0^2$$\n\nLa polarisation de l'onde EM est dite circulaire.\n\nOn montre facilement que si φ = +π/2, l'onde est circulaire gauche et que si φ = -π/2, l'onde est circulaire droite.\n\nApplication : décomposition d'une onde à polarisation rectiligne comme la superposition de deux ondes circulaires :\n\nDécomposition d'une onde à polarisation\nrectiligne comme la superposition\nde deux ondes circulaires\n\nLe champ électrique d'une onde se propageant dans\nla direction (Oz) est donné par :\n\n17",
                "bBox": {
                    "x": 109,
                    "y": 375,
                    "w": 358.01,
                    "h": 436.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 18,
        "text": "Solution :\n   1) Le champ electrique E faisant un angle @ cons-\n   tant avec [axe (Ox), Fonde possede une polarisa-\n   tion rectiligne\n\n    Doc: 13. Champ electromagnetique d'une onde plane\n   progressive monochromatique polarisee rectilignement\n                                     cte_\n   2) Nous pouvons ecrire le champ sous la forme sui-\n    vante (en ne nous interessant qu'aux composantes\n   suivant X et y car celles suivant z sont nulles)\n\n\n\n\n\n                                            Animation cabri géomètre (Y.Cortial)\n             Eo cos ( @t - kz + &) + 2\n             2                           Eo cos ( @t-kz-a)\n             Eo sin ( (t - kz + &)\n             2                          Eo sin ( wt - kz - &)\n                                         2\n\nOn utilise :\n\n\n\n                                                                     18",
        "md": "$$\\vec{E} = \\begin{cases}\nE_x = E_0 \\cos \\alpha \\cos(\\omega t - kz) \\\\\nE_y = E_0 \\sin \\alpha \\cos(\\omega t - kz) \\\\\nE_z = 0\n\\end{cases}$$\n\n1) Quelle est la polarisation de cette onde ? Faire un schéma.\n\n2) Décomposer cette onde en deux ondes à polarisations circulaires de sens opposés.\n\nSolution :\n\n1) Le champ électrique $\\vec{E}$ faisant un angle α constant avec l'axe (Ox), l'onde possède une polarisation rectiligne.\n\n```mermaid\ngraph LR\n    O((O)) --> |z| Z\n    O --> |x| X\n    O --> |y| Y\n    O --> |B| B\n    B --> |E| E\n    B -- α --> X\n```\n\nDoc. 13. Champ électromagnétique d'une onde plane progressive monochromatique polarisée rectilignement :\nα = cte.\n\n2) Nous pouvons écrire le champ sous la forme suivante (en ne nous intéressant qu'aux composantes suivant x et y car celles suivant z sont nulles) :\n\n| Superposition de 2 polarisations circulaires droite et gauche |\n|---------------------------------------------------------------|\n| [Image description: A diagram showing the superposition of two circular polarizations (right and left) resulting in a linear polarization. The diagram includes an ellipse with two circles inside, representing the combination of the two circular polarizations.] |\n\nAnimation cabri géomètre (Y.Cortial)\n\n$$\\vec{E} = \\begin{cases}\n\\frac{E_0}{2}\\cos(\\omega t - kz + \\alpha) + \\frac{E_0}{2}\\cos(\\omega t - kz - \\alpha) \\\\\n\\frac{E_0}{2}\\sin(\\omega t - kz + \\alpha) - \\frac{E_0}{2}\\sin(\\omega t - kz - \\alpha)\n\\end{cases}$$\n\nOn utilise :\n\n18",
        "images": [
            {
                "name": "img_p17_1.png",
                "height": 104,
                "width": 466,
                "x": 70.91951999999999,
                "y": 70.91960000000002,
                "original_width": 466,
                "original_height": 104
            },
            {
                "name": "img_p17_2.png",
                "height": 124,
                "width": 466,
                "x": 70.91951999999999,
                "y": 120.7196,
                "original_width": 466,
                "original_height": 124
            },
            {
                "name": "img_p17_3.png",
                "height": 114,
                "width": 466,
                "x": 70.91951999999999,
                "y": 193.79959999999997,
                "original_width": 466,
                "original_height": 114,
                "ocr": [
                    {
                        "x": 16,
                        "y": 22,
                        "w": 366,
                        "h": 28,
                        "confidence": "0.7134620863161882",
                        "text": "1) Le champ electrique E faisant un angle"
                    },
                    {
                        "x": 385,
                        "y": 29,
                        "w": 64,
                        "h": 16,
                        "confidence": "0.6708944956891751",
                        "text": "@ cons-"
                    },
                    {
                        "x": 18,
                        "y": 48,
                        "w": 314,
                        "h": 28,
                        "confidence": "0.7619344959923747",
                        "text": "tant avec [axe (Ox), Fonde possede"
                    },
                    {
                        "x": 335,
                        "y": 57,
                        "w": 34,
                        "h": 14,
                        "confidence": "0.970582377876924",
                        "text": "une"
                    },
                    {
                        "x": 368,
                        "y": 46,
                        "w": 82,
                        "h": 30,
                        "confidence": "0.9998834099164414",
                        "text": "polarisa-"
                    },
                    {
                        "x": 16,
                        "y": 74,
                        "w": 124,
                        "h": 28,
                        "confidence": "0.8124086988943152",
                        "text": "tion rectiligne"
                    }
                ]
            },
            {
                "name": "img_p17_4.png",
                "height": 268,
                "width": 466,
                "x": 70.91951999999999,
                "y": 248.51960000000003,
                "original_width": 466,
                "original_height": 268,
                "ocr": [
                    {
                        "x": 20,
                        "y": 190,
                        "w": 434,
                        "h": 28,
                        "confidence": "0.850032157976671",
                        "text": "Doc: 13. Champ electromagnetique d'une onde plane"
                    },
                    {
                        "x": 19,
                        "y": 214,
                        "w": 425,
                        "h": 29,
                        "confidence": "0.9384925792005121",
                        "text": "progressive monochromatique polarisee rectilignement"
                    },
                    {
                        "x": 241,
                        "y": 245,
                        "w": 26,
                        "h": 14,
                        "confidence": "0.40646055340766907",
                        "text": "cte_"
                    }
                ]
            },
            {
                "name": "img_p17_5.png",
                "height": 84,
                "width": 466,
                "x": 70.91951999999999,
                "y": 377.1596,
                "original_width": 466,
                "original_height": 84,
                "ocr": [
                    {
                        "x": 18,
                        "y": 2,
                        "w": 398,
                        "h": 26,
                        "confidence": "0.8386771889735904",
                        "text": "2) Nous pouvons ecrire le champ sous la forme"
                    },
                    {
                        "x": 20,
                        "y": 26,
                        "w": 434,
                        "h": 27,
                        "confidence": "0.8304473712850244",
                        "text": "vante (en ne nous interessant qu'aux composantes"
                    },
                    {
                        "x": 18,
                        "y": 50,
                        "w": 378,
                        "h": 26,
                        "confidence": "0.7047414280525586",
                        "text": "suivant X et y car celles suivant z sont nulles)"
                    },
                    {
                        "x": 412,
                        "y": 4,
                        "w": 40,
                        "h": 18,
                        "confidence": "0.8052678820535363",
                        "text": "sui-"
                    }
                ]
            },
            {
                "name": "img_p17_6.png",
                "height": 493,
                "width": 553,
                "x": 169.07999999999998,
                "y": 417.47960000000006,
                "original_width": 553,
                "original_height": 493
            },
            {
                "name": "img_p17_7.png",
                "height": 156,
                "width": 466,
                "x": 70.91951999999999,
                "y": 660.59984,
                "original_width": 466,
                "original_height": 156,
                "ocr": [
                    {
                        "x": 80,
                        "y": 26,
                        "w": 28,
                        "h": 26,
                        "confidence": "0.9859741911512148",
                        "text": "Eo"
                    },
                    {
                        "x": 268,
                        "y": 26,
                        "w": 28,
                        "h": 26,
                        "confidence": "0.9705103048228589",
                        "text": "Eo"
                    },
                    {
                        "x": 102,
                        "y": 42,
                        "w": 168,
                        "h": 24,
                        "confidence": "0.3712768966846474",
                        "text": "cos ( @t - kz + &) +"
                    },
                    {
                        "x": 293,
                        "y": 43,
                        "w": 144,
                        "h": 20,
                        "confidence": "0.47887691949386474",
                        "text": "cos ( @t-kz-a)"
                    },
                    {
                        "x": 83,
                        "y": 55,
                        "w": 18,
                        "h": 22,
                        "confidence": "1.0",
                        "text": "2"
                    },
                    {
                        "x": 271,
                        "y": 53,
                        "w": 20,
                        "h": 22,
                        "confidence": "0.9997810119987565",
                        "text": "2"
                    },
                    {
                        "x": 80,
                        "y": 84,
                        "w": 28,
                        "h": 28,
                        "confidence": "0.9991110701434338",
                        "text": "Eo"
                    },
                    {
                        "x": 264,
                        "y": 84,
                        "w": 30,
                        "h": 28,
                        "confidence": "0.9970435843934853",
                        "text": "Eo"
                    },
                    {
                        "x": 102,
                        "y": 100,
                        "w": 148,
                        "h": 24,
                        "confidence": "0.2900245070040486",
                        "text": "sin ( (t - kz + &)"
                    },
                    {
                        "x": 288,
                        "y": 100,
                        "w": 142,
                        "h": 24,
                        "confidence": "0.30161743141346836",
                        "text": "sin ( wt - kz - &)"
                    },
                    {
                        "x": 83,
                        "y": 111,
                        "w": 20,
                        "h": 24,
                        "confidence": "0.9964865947288934",
                        "text": "2"
                    },
                    {
                        "x": 269,
                        "y": 113,
                        "w": 18,
                        "h": 22,
                        "confidence": "0.999999880790714",
                        "text": "2"
                    }
                ]
            },
            {
                "name": "page_18.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$\\vec{E} = \\begin{cases}\nE_x = E_0 \\cos \\alpha \\cos(\\omega t - kz) \\\\\nE_y = E_0 \\sin \\alpha \\cos(\\omega t - kz) \\\\\nE_z = 0\n\\end{cases}$$\n\n1) Quelle est la polarisation de cette onde ? Faire un schéma.\n\n2) Décomposer cette onde en deux ondes à polarisations circulaires de sens opposés.\n\nSolution :\n\n1) Le champ électrique $\\vec{E}$ faisant un angle α constant avec l'axe (Ox), l'onde possède une polarisation rectiligne.\n\n```mermaid\ngraph LR\n    O((O)) --> |z| Z\n    O --> |x| X\n    O --> |y| Y\n    O --> |B| B\n    B --> |E| E\n    B -- α --> X\n```\n\nDoc. 13. Champ électromagnétique d'une onde plane progressive monochromatique polarisée rectilignement :\nα = cte.\n\n2) Nous pouvons écrire le champ sous la forme suivante (en ne nous intéressant qu'aux composantes suivant x et y car celles suivant z sont nulles) :",
                "md": "$$\\vec{E} = \\begin{cases}\nE_x = E_0 \\cos \\alpha \\cos(\\omega t - kz) \\\\\nE_y = E_0 \\sin \\alpha \\cos(\\omega t - kz) \\\\\nE_z = 0\n\\end{cases}$$\n\n1) Quelle est la polarisation de cette onde ? Faire un schéma.\n\n2) Décomposer cette onde en deux ondes à polarisations circulaires de sens opposés.\n\nSolution :\n\n1) Le champ électrique $\\vec{E}$ faisant un angle α constant avec l'axe (Ox), l'onde possède une polarisation rectiligne.\n\n```mermaid\ngraph LR\n    O((O)) --> |z| Z\n    O --> |x| X\n    O --> |y| Y\n    O --> |B| B\n    B --> |E| E\n    B -- α --> X\n```\n\nDoc. 13. Champ électromagnétique d'une onde plane progressive monochromatique polarisée rectilignement :\nα = cte.\n\n2) Nous pouvons écrire le champ sous la forme suivante (en ne nous intéressant qu'aux composantes suivant x et y car celles suivant z sont nulles) :",
                "bBox": {
                    "x": 78.6,
                    "y": 229.32,
                    "w": 182.4,
                    "h": 496.08
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "Superposition de 2 polarisations circulaires droite et gauche"
                    ],
                    [
                        "[Image description: A diagram showing the superposition of two circular polarizations (right and left) resulting in a linear polarization. The diagram includes an ellipse with two circles inside, representing the combination of the two circular polarizations.]"
                    ]
                ],
                "md": "| Superposition de 2 polarisations circulaires droite et gauche |\n|---------------------------------------------------------------|\n| [Image description: A diagram showing the superposition of two circular polarizations (right and left) resulting in a linear polarization. The diagram includes an ellipse with two circles inside, representing the combination of the two circular polarizations.] |",
                "isPerfectTable": true,
                "csv": "\"Superposition de 2 polarisations circulaires droite et gauche\"\n\"[Image description: A diagram showing the superposition of two circular polarizations (right and left) resulting in a linear polarization. The diagram includes an ellipse with two circles inside, representing the combination of the two circular polarizations.]\"",
                "bBox": {
                    "x": 110.76,
                    "y": 687,
                    "w": 97.92,
                    "h": 38.4
                }
            },
            {
                "type": "text",
                "value": "Animation cabri géomètre (Y.Cortial)\n\n$$\\vec{E} = \\begin{cases}\n\\frac{E_0}{2}\\cos(\\omega t - kz + \\alpha) + \\frac{E_0}{2}\\cos(\\omega t - kz - \\alpha) \\\\\n\\frac{E_0}{2}\\sin(\\omega t - kz + \\alpha) - \\frac{E_0}{2}\\sin(\\omega t - kz - \\alpha)\n\\end{cases}$$\n\nOn utilise :\n\n18",
                "md": "Animation cabri géomètre (Y.Cortial)\n\n$$\\vec{E} = \\begin{cases}\n\\frac{E_0}{2}\\cos(\\omega t - kz + \\alpha) + \\frac{E_0}{2}\\cos(\\omega t - kz - \\alpha) \\\\\n\\frac{E_0}{2}\\sin(\\omega t - kz + \\alpha) - \\frac{E_0}{2}\\sin(\\omega t - kz - \\alpha)\n\\end{cases}$$\n\nOn utilise :\n\n18",
                "bBox": {
                    "x": 110.76,
                    "y": 687,
                    "w": 191.26,
                    "h": 124.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 19,
        "text": "         cosacosb=          1(cos(a−b)+cos(a+b))                ;   sinacosb      =1(sin(a+b)−sin(b−a))\n  avec une onde circulaire gauche2                                                   2\n                          Eo cOS   WI~kz + &)\n               EcG        Eo sin ( ot - kz + &)\n   et une onde circulaire droite\n                          Eo cos ( wt - kz _ &)\n             ECD          Eo sin ( tt - kz - a)\n  En notation complexe, nous aurions\n              E       Eocos & ej(wt kz)\n                      Eosin c ejkor - kz)\n\n\n\n\n\nOn utilise ici :\n                                  cosα    =  ejα  +e−jα        et      sinα   =  ejα  −e−jα\n                                                   2                                  2j\n\n     •    Polarisation elliptique :\nOn rappelle que :\n                                                   Ex   =E0x  cos(ωt)\n                                                   Ey   =E0y   cos(ωt    −ϕ)\n\n\n\n                                                              19",
        "md": "$$\\cos a \\cos b = \\frac{1}{2}(\\cos(a-b) + \\cos(a+b)) \\quad ; \\quad \\sin a \\cos b = \\frac{1}{2}(\\sin(a+b) - \\sin(b-a))$$\n\navec une onde circulaire gauche :\n\n$$\\vec{E_{CG}} = \\begin{bmatrix}\n\\frac{E_0}{2}\\cos(\\omega t - kz + \\alpha) \\\\\n\\frac{E_0}{2}\\sin(\\omega t - kz + \\alpha)\n\\end{bmatrix}$$\n\net une onde circulaire droite :\n\n$$\\vec{E_{CD}} = \\begin{bmatrix}\n\\frac{E_0}{2}\\cos(\\omega t - kz - \\alpha) \\\\\n-\\frac{E_0}{2}\\sin(\\omega t - kz - \\alpha)\n\\end{bmatrix}$$\n\nEn notation complexe, nous aurions :\n\n$$\\vec{E} = \\begin{bmatrix}\nE_0\\cos\\alpha e^{j(\\omega t - kz)} \\\\\nE_0\\sin\\alpha e^{j(\\omega t - kz)}\n\\end{bmatrix}$$\n\n$$= \\begin{bmatrix}\n\\frac{E_0}{2}e^{j\\alpha}e^{j(\\omega t - kz)} \\\\\n-j\\frac{E_0}{2}e^{j\\alpha}e^{j(\\omega t - kz)}\n\\end{bmatrix} + \\begin{bmatrix}\n\\frac{E_0}{2}e^{-j\\alpha}e^{j(\\omega t - kz)} \\\\\nj\\frac{E_0}{2}e^{-j\\alpha}e^{j(\\omega t - kz)}\n\\end{bmatrix}$$\n\nonde circulaire gauche | onde circulaire droite\n\nOn utilise ici :\n\n$$\\cos \\alpha = \\frac{e^{j\\alpha} + e^{-j\\alpha}}{2} \\quad et \\quad \\sin \\alpha = \\frac{e^{j\\alpha} - e^{-j\\alpha}}{2j}$$\n\n- Polarisation elliptique :\n\nOn rappelle que :\n\n$$E_x = E_{0x} \\cos(\\omega t)$$\n$$E_y = E_{0y} \\cos(\\omega t - \\varphi)$$",
        "images": [
            {
                "name": "img_p18_1.png",
                "height": 154,
                "width": 466,
                "x": 70.91951999999999,
                "y": 107.87960000000005,
                "original_width": 466,
                "original_height": 154,
                "ocr": [
                    {
                        "x": 16,
                        "y": 0,
                        "w": 210,
                        "h": 24,
                        "confidence": "0.822306343826886",
                        "text": "avec une onde circulaire"
                    },
                    {
                        "x": 222,
                        "y": 0,
                        "w": 69,
                        "h": 28,
                        "confidence": "0.8570813866775053",
                        "text": "gauche"
                    },
                    {
                        "x": 182,
                        "y": 34,
                        "w": 28,
                        "h": 26,
                        "confidence": "0.9994882070392053",
                        "text": "Eo"
                    },
                    {
                        "x": 207,
                        "y": 55,
                        "w": 32,
                        "h": 16,
                        "confidence": "0.30095254050346765",
                        "text": "cOS"
                    },
                    {
                        "x": 247,
                        "y": 55,
                        "w": 24,
                        "h": 14,
                        "confidence": "0.5619693423715887",
                        "text": "WI"
                    },
                    {
                        "x": 271,
                        "y": 48,
                        "w": 83,
                        "h": 25,
                        "confidence": "0.5716616404147826",
                        "text": "~kz + &)"
                    },
                    {
                        "x": 106,
                        "y": 72,
                        "w": 44,
                        "h": 24,
                        "confidence": "0.9325019016981803",
                        "text": "EcG"
                    },
                    {
                        "x": 182,
                        "y": 92,
                        "w": 30,
                        "h": 28,
                        "confidence": "0.9967903423813023",
                        "text": "Eo"
                    },
                    {
                        "x": 206,
                        "y": 108,
                        "w": 144,
                        "h": 24,
                        "confidence": "0.2777430527941715",
                        "text": "sin ( ot - kz + &)"
                    }
                ]
            },
            {
                "name": "img_p18_2.png",
                "height": 164,
                "width": 466,
                "x": 70.91951999999999,
                "y": 181.79959999999997,
                "original_width": 466,
                "original_height": 164,
                "ocr": [
                    {
                        "x": 18,
                        "y": 6,
                        "w": 240,
                        "h": 24,
                        "confidence": "0.973268515337881",
                        "text": "et une onde circulaire droite"
                    },
                    {
                        "x": 184,
                        "y": 48,
                        "w": 28,
                        "h": 28,
                        "confidence": "0.996625707283063",
                        "text": "Eo"
                    },
                    {
                        "x": 209,
                        "y": 67,
                        "w": 144,
                        "h": 20,
                        "confidence": "0.4136471677623652",
                        "text": "cos ( wt - kz _ &)"
                    },
                    {
                        "x": 94,
                        "y": 88,
                        "w": 44,
                        "h": 24,
                        "confidence": "0.6601252353550259",
                        "text": "ECD"
                    },
                    {
                        "x": 186,
                        "y": 108,
                        "w": 28,
                        "h": 28,
                        "confidence": "0.9980056883264975",
                        "text": "Eo"
                    },
                    {
                        "x": 211,
                        "y": 127,
                        "w": 142,
                        "h": 20,
                        "confidence": "0.3488862601492974",
                        "text": "sin ( tt - kz - a)"
                    }
                ]
            },
            {
                "name": "img_p18_3.png",
                "height": 134,
                "width": 466,
                "x": 70.91951999999999,
                "y": 260.5196,
                "original_width": 466,
                "original_height": 134,
                "ocr": [
                    {
                        "x": 16,
                        "y": 14,
                        "w": 308,
                        "h": 24,
                        "confidence": "0.630822628709174",
                        "text": "En notation complexe, nous aurions"
                    },
                    {
                        "x": 156,
                        "y": 58,
                        "w": 116,
                        "h": 28,
                        "confidence": "0.24883420330536082",
                        "text": "Eocos & ej(wt"
                    },
                    {
                        "x": 279,
                        "y": 59,
                        "w": 26,
                        "h": 16,
                        "confidence": "0.7207772731781006",
                        "text": "kz)"
                    },
                    {
                        "x": 97,
                        "y": 73,
                        "w": 18,
                        "h": 24,
                        "confidence": "0.9937843412190119",
                        "text": "E"
                    },
                    {
                        "x": 156,
                        "y": 92,
                        "w": 114,
                        "h": 30,
                        "confidence": "0.3906925905878828",
                        "text": "Eosin c ejkor -"
                    },
                    {
                        "x": 277,
                        "y": 95,
                        "w": 24,
                        "h": 16,
                        "confidence": "0.9397713194590891",
                        "text": "kz)"
                    }
                ]
            },
            {
                "name": "img_p18_4.png",
                "height": 216,
                "width": 466,
                "x": 70.91951999999999,
                "y": 324.8396,
                "original_width": 466,
                "original_height": 216
            },
            {
                "name": "page_19.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "$$\\cos a \\cos b = \\frac{1}{2}(\\cos(a-b) + \\cos(a+b)) \\quad ; \\quad \\sin a \\cos b = \\frac{1}{2}(\\sin(a+b) - \\sin(b-a))$$\n\navec une onde circulaire gauche :\n\n$$\\vec{E_{CG}} = \\begin{bmatrix}\n\\frac{E_0}{2}\\cos(\\omega t - kz + \\alpha) \\\\\n\\frac{E_0}{2}\\sin(\\omega t - kz + \\alpha)\n\\end{bmatrix}$$\n\net une onde circulaire droite :\n\n$$\\vec{E_{CD}} = \\begin{bmatrix}\n\\frac{E_0}{2}\\cos(\\omega t - kz - \\alpha) \\\\\n-\\frac{E_0}{2}\\sin(\\omega t - kz - \\alpha)\n\\end{bmatrix}$$\n\nEn notation complexe, nous aurions :\n\n$$\\vec{E} = \\begin{bmatrix}\nE_0\\cos\\alpha e^{j(\\omega t - kz)} \\\\\nE_0\\sin\\alpha e^{j(\\omega t - kz)}\n\\end{bmatrix}$$\n\n$$= \\begin{bmatrix}\n\\frac{E_0}{2}e^{j\\alpha}e^{j(\\omega t - kz)} \\\\\n-j\\frac{E_0}{2}e^{j\\alpha}e^{j(\\omega t - kz)}\n\\end{bmatrix} + \\begin{bmatrix}\n\\frac{E_0}{2}e^{-j\\alpha}e^{j(\\omega t - kz)} \\\\\nj\\frac{E_0}{2}e^{-j\\alpha}e^{j(\\omega t - kz)}\n\\end{bmatrix}$$\n\nonde circulaire gauche | onde circulaire droite\n\nOn utilise ici :\n\n$$\\cos \\alpha = \\frac{e^{j\\alpha} + e^{-j\\alpha}}{2} \\quad et \\quad \\sin \\alpha = \\frac{e^{j\\alpha} - e^{-j\\alpha}}{2j}$$\n\n- Polarisation elliptique :\n\nOn rappelle que :\n\n$$E_x = E_{0x} \\cos(\\omega t)$$\n$$E_y = E_{0y} \\cos(\\omega t - \\varphi)$$",
                "md": "$$\\cos a \\cos b = \\frac{1}{2}(\\cos(a-b) + \\cos(a+b)) \\quad ; \\quad \\sin a \\cos b = \\frac{1}{2}(\\sin(a+b) - \\sin(b-a))$$\n\navec une onde circulaire gauche :\n\n$$\\vec{E_{CG}} = \\begin{bmatrix}\n\\frac{E_0}{2}\\cos(\\omega t - kz + \\alpha) \\\\\n\\frac{E_0}{2}\\sin(\\omega t - kz + \\alpha)\n\\end{bmatrix}$$\n\net une onde circulaire droite :\n\n$$\\vec{E_{CD}} = \\begin{bmatrix}\n\\frac{E_0}{2}\\cos(\\omega t - kz - \\alpha) \\\\\n-\\frac{E_0}{2}\\sin(\\omega t - kz - \\alpha)\n\\end{bmatrix}$$\n\nEn notation complexe, nous aurions :\n\n$$\\vec{E} = \\begin{bmatrix}\nE_0\\cos\\alpha e^{j(\\omega t - kz)} \\\\\nE_0\\sin\\alpha e^{j(\\omega t - kz)}\n\\end{bmatrix}$$\n\n$$= \\begin{bmatrix}\n\\frac{E_0}{2}e^{j\\alpha}e^{j(\\omega t - kz)} \\\\\n-j\\frac{E_0}{2}e^{j\\alpha}e^{j(\\omega t - kz)}\n\\end{bmatrix} + \\begin{bmatrix}\n\\frac{E_0}{2}e^{-j\\alpha}e^{j(\\omega t - kz)} \\\\\nj\\frac{E_0}{2}e^{-j\\alpha}e^{j(\\omega t - kz)}\n\\end{bmatrix}$$\n\nonde circulaire gauche | onde circulaire droite\n\nOn utilise ici :\n\n$$\\cos \\alpha = \\frac{e^{j\\alpha} + e^{-j\\alpha}}{2} \\quad et \\quad \\sin \\alpha = \\frac{e^{j\\alpha} - e^{-j\\alpha}}{2j}$$\n\n- Polarisation elliptique :\n\nOn rappelle que :\n\n$$E_x = E_{0x} \\cos(\\omega t)$$\n$$E_y = E_{0y} \\cos(\\omega t - \\varphi)$$",
                "bBox": {
                    "x": 78.6,
                    "y": 90,
                    "w": 308.74,
                    "h": 482.99
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 20,
        "text": "                                                                       polarisations elliptiques et rectilignes\n               'elliptiques                                                                                9={\n                 gauches\n                                                                                        { <0<T                           0< 9<1\n              rectilignes                                                    Q=ft                                                          0 =0\n                                                                        ~<p<-{                                                {<0<0\n              elliptiques                                                                                  ( =     2\n              droites\n                                                                                                                                               Er      Eoxcos ( Wt)\n                                                                                                                                               Ey      Eoycos ( @t\n\nLa coordonnée selon (Oy) peut encore s’écrire :\n                                                                   Ey      =E0y(cosωtcosϕ+sinωtsinϕ)\nAfin d’éliminer le temps, on écrit que :\n                                                                                         cos(ωt)=            Ex\n                                                                                                             E0x\n\n\n\n                                                                                          1      ⌈\n                                                                                                 ⌊   Ey           Ex                ⌉\n                                                                                                                                    ⌋\n                                                                      sinωt=           sin ϕ⌊E0y             −   E0x      cosϕ⌋\n                                                                                                 ⎜                                  ⎝\nPar conséquent, en utilisant cos2                                    ωt+sin2              ωt      =1 :\n                                       ⌈  Ex     ⌉2  +sin12ϕ⎜⌈⌈\n                                                                   ⌊⌊    Ey     ⌉2\n                                                                                ⌋        2⌈E0y⎝⎜⌊Ey    ⌉⌈\n                                                                                                       ⌋⌊E0xEx       ⌉cosϕ+⌊⌈             Ex     ⌉2        2ϕ⌋⌉\n                                                                                                                                                                  ⌋=1\n                                       ⌊E0x\n                                       ⌊\n                                       ⎜         ⌋\n                                                 ⌋\n                                                 ⎝                 ⌊⌊E0y⎝\n                                                                   ⌊⎜           ⌋     −     ⌊\n                                                                                            ⎜          ⌋⌊            ⌋\n                                                                                                                     ⌋\n                                                                                                                     ⎝               ⌊E0x\n                                                                                                                                     ⎜           ⌋\n                                                                                                                                                 ⌋\n                                                                                                                                                 ⎝   cos          ⌋\n                                                                                                                                                                  ⎝\nSoit :\n                                                          ⌈  Ex  ⌉2   −2⌈       Ex      ⌉⌈\n                                                                                        ⎝⌊E0yEy      ⌉cosϕ+⌊\n                                                                                                     ⌋                ⌈\n                                                                                                                      ⌊E0yEy      ⌉2\n                                                                                                                                  ⌋              2ϕ\n                                                          ⌊E0x\n                                                          ⌊\n                                                          ⎜      ⌋\n                                                                 ⌋\n                                                                 ⎝          ⌊E0x\n                                                                            ⌊\n                                                                            ⎜           ⌋⌊\n                                                                                        ⌋⎜           ⌋\n                                                                                                     ⎝                ⎜           ⌋\n                                                                                                                                  ⎝    =sin\n\n\n\n                                                                                                    20",
        "md": "# polarisations elliptiques et rectilignes\n\n| elliptiques gauches | | | |\n|---------------------|---|---|---|\n| | φ = π/2 | 0 < φ < π/2 | |\n| π/2 < φ < π | φ | φ = 0 | |\n| rectilignes | φ = ±π | | -π/2 < φ < 0 |\n| elliptiques droites | -π < φ < -π/2 | φ = -π/2 | |\n\n$$\n\\begin{aligned}\nE_x &= E_{0x}\\cos(\\omega t) \\\\\nE_y &= E_{0y}\\cos(\\omega t - \\phi)\n\\end{aligned}\n$$\n\nLa coordonnée selon (Oy) peut encore s'écrire :\n\n$$E_y = E_{0y}(\\cos\\omega t \\cos\\phi + \\sin\\omega t \\sin\\phi)$$\n\nAfin d'éliminer le temps, on écrit que :\n\n$$\\cos(\\omega t) = \\frac{E_x}{E_{0x}}$$\n\n$$\\sin \\omega t = \\frac{1}{\\sin \\phi}\\left(\\frac{E_y}{E_{0y}} - \\frac{E_x}{E_{0x}}\\cos\\phi\\right)$$\n\nPar conséquent, en utilisant $\\cos^2 \\omega t + \\sin^2 \\omega t = 1$ :\n\n$$\\left(\\frac{E_x}{E_{0x}}\\right)^2 + \\frac{1}{\\sin^2\\phi}\\left[\\left(\\frac{E_y}{E_{0y}}\\right)^2 - 2\\left(\\frac{E_y}{E_{0y}}\\right)\\left(\\frac{E_x}{E_{0x}}\\right)\\cos\\phi + \\left(\\frac{E_x}{E_{0x}}\\right)^2\\cos^2\\phi\\right] = 1$$\n\nSoit :\n\n$$\\left(\\frac{E_x}{E_{0x}}\\right)^2 - 2\\left(\\frac{E_x}{E_{0x}}\\right)\\left(\\frac{E_y}{E_{0y}}\\right)\\cos\\phi + \\left(\\frac{E_y}{E_{0y}}\\right)^2 = \\sin^2\\phi$$\n\n20",
        "images": [
            {
                "name": "img_p19_1.png",
                "height": 956,
                "width": 961,
                "x": 97.91951999999999,
                "y": 70.91960000000006,
                "original_width": 961,
                "original_height": 956,
                "ocr": [
                    {
                        "x": 319,
                        "y": 0,
                        "w": 337,
                        "h": 30,
                        "confidence": "0.6792242895494642",
                        "text": "polarisations elliptiques et rectilignes"
                    },
                    {
                        "x": 8,
                        "y": 278,
                        "w": 100,
                        "h": 26,
                        "confidence": "0.5447195191771146",
                        "text": "'elliptiques"
                    },
                    {
                        "x": 501,
                        "y": 265,
                        "w": 52,
                        "h": 38,
                        "confidence": "0.2572736343746346",
                        "text": "9={"
                    },
                    {
                        "x": 19,
                        "y": 302,
                        "w": 79,
                        "h": 28,
                        "confidence": "0.9750660924436741",
                        "text": "gauches"
                    },
                    {
                        "x": 409,
                        "y": 393,
                        "w": 84,
                        "h": 36,
                        "confidence": "0.41901143283572867",
                        "text": "{ <0<T"
                    },
                    {
                        "x": 571,
                        "y": 397,
                        "w": 83,
                        "h": 33,
                        "confidence": "0.16973479097704353",
                        "text": "0< 9<1"
                    },
                    {
                        "x": 5,
                        "y": 487,
                        "w": 102,
                        "h": 37,
                        "confidence": "0.863624627103594",
                        "text": "rectilignes"
                    },
                    {
                        "x": 351,
                        "y": 500,
                        "w": 65,
                        "h": 24,
                        "confidence": "0.27585020661354065",
                        "text": "Q=ft"
                    },
                    {
                        "x": 662,
                        "y": 504,
                        "w": 47,
                        "h": 21,
                        "confidence": "0.6093217609255716",
                        "text": "0 =0"
                    },
                    {
                        "x": 325,
                        "y": 589,
                        "w": 106,
                        "h": 38,
                        "confidence": "0.2960207039297298",
                        "text": "~<p<-{"
                    },
                    {
                        "x": 597,
                        "y": 591,
                        "w": 88,
                        "h": 38,
                        "confidence": "0.3727070223409542",
                        "text": "{<0<0"
                    },
                    {
                        "x": 6,
                        "y": 744,
                        "w": 96,
                        "h": 28,
                        "confidence": "0.9999510089647983",
                        "text": "elliptiques"
                    },
                    {
                        "x": 501,
                        "y": 741,
                        "w": 30,
                        "h": 16,
                        "confidence": "0.32192760705947876",
                        "text": "( ="
                    },
                    {
                        "x": 543,
                        "y": 735,
                        "w": 16,
                        "h": 32,
                        "confidence": "0.8005087649513634",
                        "text": "2"
                    },
                    {
                        "x": 6,
                        "y": 770,
                        "w": 66,
                        "h": 24,
                        "confidence": "0.9900768382278831",
                        "text": "droites"
                    },
                    {
                        "x": 682,
                        "y": 844,
                        "w": 30,
                        "h": 28,
                        "confidence": "0.2688622747175478",
                        "text": "Er"
                    },
                    {
                        "x": 736,
                        "y": 846,
                        "w": 106,
                        "h": 28,
                        "confidence": "0.643437831715665",
                        "text": "Eoxcos ( Wt)"
                    },
                    {
                        "x": 682,
                        "y": 880,
                        "w": 28,
                        "h": 28,
                        "confidence": "0.9989934288184592",
                        "text": "Ey"
                    },
                    {
                        "x": 736,
                        "y": 880,
                        "w": 100,
                        "h": 30,
                        "confidence": "0.6438542350935647",
                        "text": "Eoycos ( @t"
                    }
                ]
            },
            {
                "name": "page_20.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "heading",
                "lvl": 1,
                "value": "polarisations elliptiques et rectilignes",
                "md": "# polarisations elliptiques et rectilignes",
                "bBox": {
                    "x": 100,
                    "y": 70.92,
                    "w": 270.62,
                    "h": 321.62
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "elliptiques gauches",
                        "",
                        "",
                        ""
                    ],
                    [
                        "",
                        "φ = π/2",
                        "0 < φ < π/2",
                        ""
                    ],
                    [
                        "π/2 < φ < π",
                        "φ",
                        "φ = 0",
                        ""
                    ],
                    [
                        "rectilignes",
                        "φ = ±π",
                        "",
                        "-π/2 < φ < 0"
                    ],
                    [
                        "elliptiques droites",
                        "-π < φ < -π/2",
                        "φ = -π/2",
                        ""
                    ]
                ],
                "md": "| elliptiques gauches | | | |\n|---------------------|---|---|---|\n| | φ = π/2 | 0 < φ < π/2 | |\n| π/2 < φ < π | φ | φ = 0 | |\n| rectilignes | φ = ±π | | -π/2 < φ < 0 |\n| elliptiques droites | -π < φ < -π/2 | φ = -π/2 | |",
                "isPerfectTable": true,
                "csv": "\"elliptiques gauches\",\"\",\"\",\"\"\n\"\",\"φ = π/2\",\"0 < φ < π/2\",\"\"\n\"π/2 < φ < π\",\"φ\",\"φ = 0\",\"\"\n\"rectilignes\",\"φ = ±π\",\"\",\"-π/2 < φ < 0\"\n\"elliptiques droites\",\"-π < φ < -π/2\",\"φ = -π/2\",\"\"",
                "bBox": {
                    "x": 100,
                    "y": 196.74,
                    "w": 230.29,
                    "h": 204.97
                }
            },
            {
                "type": "text",
                "value": "$$\n\\begin{aligned}\nE_x &= E_{0x}\\cos(\\omega t) \\\\\nE_y &= E_{0y}\\cos(\\omega t - \\phi)\n\\end{aligned}\n$$\n\nLa coordonnée selon (Oy) peut encore s'écrire :\n\n$$E_y = E_{0y}(\\cos\\omega t \\cos\\phi + \\sin\\omega t \\sin\\phi)$$\n\nAfin d'éliminer le temps, on écrit que :\n\n$$\\cos(\\omega t) = \\frac{E_x}{E_{0x}}$$\n\n$$\\sin \\omega t = \\frac{1}{\\sin \\phi}\\left(\\frac{E_y}{E_{0y}} - \\frac{E_x}{E_{0x}}\\cos\\phi\\right)$$\n\nPar conséquent, en utilisant $\\cos^2 \\omega t + \\sin^2 \\omega t = 1$ :\n\n$$\\left(\\frac{E_x}{E_{0x}}\\right)^2 + \\frac{1}{\\sin^2\\phi}\\left[\\left(\\frac{E_y}{E_{0y}}\\right)^2 - 2\\left(\\frac{E_y}{E_{0y}}\\right)\\left(\\frac{E_x}{E_{0x}}\\right)\\cos\\phi + \\left(\\frac{E_x}{E_{0x}}\\right)^2\\cos^2\\phi\\right] = 1$$\n\nSoit :\n\n$$\\left(\\frac{E_x}{E_{0x}}\\right)^2 - 2\\left(\\frac{E_x}{E_{0x}}\\right)\\left(\\frac{E_y}{E_{0y}}\\right)\\cos\\phi + \\left(\\frac{E_y}{E_{0y}}\\right)^2 = \\sin^2\\phi$$\n\n20",
                "md": "$$\n\\begin{aligned}\nE_x &= E_{0x}\\cos(\\omega t) \\\\\nE_y &= E_{0y}\\cos(\\omega t - \\phi)\n\\end{aligned}\n$$\n\nLa coordonnée selon (Oy) peut encore s'écrire :\n\n$$E_y = E_{0y}(\\cos\\omega t \\cos\\phi + \\sin\\omega t \\sin\\phi)$$\n\nAfin d'éliminer le temps, on écrit que :\n\n$$\\cos(\\omega t) = \\frac{E_x}{E_{0x}}$$\n\n$$\\sin \\omega t = \\frac{1}{\\sin \\phi}\\left(\\frac{E_y}{E_{0y}} - \\frac{E_x}{E_{0x}}\\cos\\phi\\right)$$\n\nPar conséquent, en utilisant $\\cos^2 \\omega t + \\sin^2 \\omega t = 1$ :\n\n$$\\left(\\frac{E_x}{E_{0x}}\\right)^2 + \\frac{1}{\\sin^2\\phi}\\left[\\left(\\frac{E_y}{E_{0y}}\\right)^2 - 2\\left(\\frac{E_y}{E_{0y}}\\right)\\left(\\frac{E_x}{E_{0x}}\\right)\\cos\\phi + \\left(\\frac{E_x}{E_{0x}}\\right)^2\\cos^2\\phi\\right] = 1$$\n\nSoit :\n\n$$\\left(\\frac{E_x}{E_{0x}}\\right)^2 - 2\\left(\\frac{E_x}{E_{0x}}\\right)\\left(\\frac{E_y}{E_{0y}}\\right)\\cos\\phi + \\left(\\frac{E_y}{E_{0y}}\\right)^2 = \\sin^2\\phi$$\n\n20",
                "bBox": {
                    "x": 264,
                    "y": 377.13,
                    "w": 147.37,
                    "h": 434.83
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 21,
        "text": "Le  sens  de  parcours  de  l’ellipse  peut  être  déterminé  en  écrivant  qu’à  t = 0,  au  point  A  (voir\nfigure), lorsque Ex = E0x est maximal, on a :\n                                                      ⌈dEy⌋\n                                                      ⌊\n                                                      ⌊       ⌉\n                                                              ⌋t=0  =ωE0ysinϕ\n                                                      ⎜   dt  ⎝\n                  Eyo cos(2 pi (t/T - 2lambda))\n                  Ezo cos(2 pi ( (t to) / `lambda))\n                                                                              ambda\n                                                                      uel obje\n                                                                  Exo\n                                                   Eyo]\n                      On peut modifier >ongueur donde lambda Exo,Eyo    le retard temporel to deEy sur Ex\n\n                                           Animation cabri géomètre (Y.Cortial)\nLe sens de rotation est donc donné par le signe de sinϕ : si sinϕ > 0, le parcours se fait dans le\nsens trigonométrique, si sinϕ < 0, il se fait dans le sens des aiguilles d’une montre.\n\n\nCas de la lumière naturelle :\nPour  la  plupart  des  sources  lumineuses  classiques,  la  lumière  émise  correspond  à  une\nsuperposition d’OPPM de durées très courtes (de l’ordre de 10 – 10 s, mais n’oublions pas que la\npériode des ces ondes est de l’ordre de 10 – 15 s) et de polarisation bien fixée pour chaque onde\nmais changeant de façon aléatoire entre deux ondes planes progressives monochromatiques.\nLes  détecteurs  optiques  sont  sensibles  à  la  valeur  moyenne  dans  le  temps  du  carré  du  champ\nélectrique (c’est l’intensité lumineuse) sur des durées de l’ordre de 10 – 12 s (œil) à 10 – 6 s (bonne\ncellule photoélectrique). Ils ne peuvent donc pas suivre la polarisation d’une des OPPM dont la\nsuccession forme la lumière visible : on dit que la lumière naturelle n’est pas polarisée.\n\n\n\n\n\n\n\n\n                                                                    21",
        "md": "Le sens de parcours de l'ellipse peut être déterminé en écrivant qu'à t = 0, au point A (voir figure), lorsque Ex = E0x est maximal, on a :\n\n$$\\left(\\frac{dE_y}{dt}\\right)_{t=0} = \\omega E_{0y} \\sin \\varphi$$\n\nEx = Exo cos(2 π (t / T - z/lambda))\nEy = Ezo cos(2 π ((t-to) / T - z/lambda))\n\n```mermaid\ngraph LR\n    A[x] --> B[O]\n    B --> C[y]\n    B --> D[z]\n    E[M] --> F[lambda]\n    G[Quel objet ?]\n```\n\n```\n| Exo |     |\n|-----|-----|\n| Eyo | E   |\n```\n\nOn peut modifier la longueur d'onde lambda, Exo, Eyo et le retard temporel to de Ey sur Ex\n\n[Animation cabri géomètre (Y.Cortial)](Animation cabri géomètre (Y.Cortial))\n\nLe sens de rotation est donc donné par le signe de sin φ : si sin φ > 0, le parcours se fait dans le sens trigonométrique, si sin φ < 0, il se fait dans le sens des aiguilles d'une montre.\n\n## Cas de la lumière naturelle :\n\nPour la plupart des sources lumineuses classiques, la lumière émise correspond à une superposition d'OPPM de durées très courtes (de l'ordre de 10⁻¹⁰ s, mais n'oublions pas que la période des ces ondes est de l'ordre de 10⁻¹⁵ s) et de polarisation bien fixée pour chaque onde mais changeant de façon aléatoire entre deux ondes planes progressives monochromatiques.\n\nLes détecteurs optiques sont sensibles à la valeur moyenne dans le temps du carré du champ électrique (c'est l'intensité lumineuse) sur des durées de l'ordre de 10⁻¹² s (œil) à 10⁻⁶ s (bonne cellule photoélectrique). Ils ne peuvent donc pas suivre la polarisation d'une des OPPM dont la succession forme la lumière visible : on dit que la lumière naturelle n'est pas polarisée.\n\n[An image of a world map silhouette is present at the bottom of the page]\n\n21",
        "images": [
            {
                "name": "img_p20_1.png",
                "height": 438,
                "width": 621,
                "x": 110.39952,
                "y": 144.83960000000002,
                "original_width": 621,
                "original_height": 438,
                "ocr": [
                    {
                        "x": 31,
                        "y": 1,
                        "w": 108,
                        "h": 16,
                        "confidence": "0.6302910147473143",
                        "text": "Eyo cos(2 pi (t/T - 2"
                    },
                    {
                        "x": 147,
                        "y": 1,
                        "w": 44,
                        "h": 14,
                        "confidence": "0.6358587382594405",
                        "text": "lambda))"
                    },
                    {
                        "x": 31,
                        "y": 15,
                        "w": 80,
                        "h": 16,
                        "confidence": "0.9796827287178282",
                        "text": "Ezo cos(2 pi ( (t"
                    },
                    {
                        "x": 115,
                        "y": 17,
                        "w": 26,
                        "h": 14,
                        "confidence": "0.39397318789987523",
                        "text": "to) / `"
                    },
                    {
                        "x": 169,
                        "y": 17,
                        "w": 46,
                        "h": 14,
                        "confidence": "0.9624445608569041",
                        "text": "lambda))"
                    },
                    {
                        "x": 357,
                        "y": 113,
                        "w": 36,
                        "h": 12,
                        "confidence": "0.9992900674572758",
                        "text": "ambda"
                    },
                    {
                        "x": 315,
                        "y": 183,
                        "w": 44,
                        "h": 12,
                        "confidence": "0.8212311126632473",
                        "text": "uel obje"
                    },
                    {
                        "x": 293,
                        "y": 237,
                        "w": 22,
                        "h": 14,
                        "confidence": "0.9995717799287186",
                        "text": "Exo"
                    },
                    {
                        "x": 211,
                        "y": 317,
                        "w": 22,
                        "h": 14,
                        "confidence": "0.18940778076648712",
                        "text": "Eyo]"
                    },
                    {
                        "x": 55,
                        "y": 397,
                        "w": 82,
                        "h": 16,
                        "confidence": "0.35590236925717916",
                        "text": "On peut modifier >"
                    },
                    {
                        "x": 147,
                        "y": 399,
                        "w": 116,
                        "h": 14,
                        "confidence": "0.9698952097618132",
                        "text": "ongueur donde lambda"
                    },
                    {
                        "x": 267,
                        "y": 397,
                        "w": 48,
                        "h": 16,
                        "confidence": "0.9893315777350515",
                        "text": "Exo,Eyo"
                    },
                    {
                        "x": 323,
                        "y": 397,
                        "w": 84,
                        "h": 14,
                        "confidence": "0.7763390973604419",
                        "text": "le retard temporel"
                    },
                    {
                        "x": 411,
                        "y": 397,
                        "w": 78,
                        "h": 14,
                        "confidence": "0.8327678301533626",
                        "text": "to deEy sur Ex"
                    }
                ]
            },
            {
                "name": "page_21.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "Le sens de parcours de l'ellipse peut être déterminé en écrivant qu'à t = 0, au point A (voir figure), lorsque Ex = E0x est maximal, on a :\n\n$$\\left(\\frac{dE_y}{dt}\\right)_{t=0} = \\omega E_{0y} \\sin \\varphi$$\n\nEx = Exo cos(2 π (t / T - z/lambda))\nEy = Ezo cos(2 π ((t-to) / T - z/lambda))\n\n```mermaid\ngraph LR\n    A[x] --> B[O]\n    B --> C[y]\n    B --> D[z]\n    E[M] --> F[lambda]\n    G[Quel objet ?]\n```\n\n```",
                "md": "Le sens de parcours de l'ellipse peut être déterminé en écrivant qu'à t = 0, au point A (voir figure), lorsque Ex = E0x est maximal, on a :\n\n$$\\left(\\frac{dE_y}{dt}\\right)_{t=0} = \\omega E_{0y} \\sin \\varphi$$\n\nEx = Exo cos(2 π (t / T - z/lambda))\nEy = Ezo cos(2 π ((t-to) / T - z/lambda))\n\n```mermaid\ngraph LR\n    A[x] --> B[O]\n    B --> C[y]\n    B --> D[z]\n    E[M] --> F[lambda]\n    G[Quel objet ?]\n```\n\n```",
                "bBox": {
                    "x": 199.05,
                    "y": 132,
                    "w": 148.36,
                    "h": 163.65
                }
            },
            {
                "type": "table",
                "rows": [
                    [
                        "Exo",
                        ""
                    ],
                    [
                        "Eyo",
                        "E"
                    ]
                ],
                "md": "| Exo |     |\n|-----|-----|\n| Eyo | E   |",
                "isPerfectTable": true,
                "csv": "\"Exo\",\"\"\n\"Eyo\",\"E\"",
                "bBox": {
                    "x": 287.11,
                    "y": 287.23,
                    "w": 13.27,
                    "h": 8.41
                }
            },
            {
                "type": "text",
                "value": "```\n\nOn peut modifier la longueur d'onde lambda, Exo, Eyo et le retard temporel to de Ey sur Ex\n\n[Animation cabri géomètre (Y.Cortial)](Animation cabri géomètre (Y.Cortial))\n\nLe sens de rotation est donc donné par le signe de sin φ : si sin φ > 0, le parcours se fait dans le sens trigonométrique, si sin φ < 0, il se fait dans le sens des aiguilles d'une montre.",
                "md": "```\n\nOn peut modifier la longueur d'onde lambda, Exo, Eyo et le retard temporel to de Ey sur Ex\n\n[Animation cabri géomètre (Y.Cortial)](Animation cabri géomètre (Y.Cortial))\n\nLe sens de rotation est donc donné par le signe de sin φ : si sin φ > 0, le parcours se fait dans le sens trigonométrique, si sin φ < 0, il se fait dans le sens des aiguilles d'une montre.",
                "bBox": {
                    "x": 287.11,
                    "y": 212.73,
                    "w": 60.31,
                    "h": 82.91
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Cas de la lumière naturelle :",
                "md": "## Cas de la lumière naturelle :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Pour la plupart des sources lumineuses classiques, la lumière émise correspond à une superposition d'OPPM de durées très courtes (de l'ordre de 10⁻¹⁰ s, mais n'oublions pas que la période des ces ondes est de l'ordre de 10⁻¹⁵ s) et de polarisation bien fixée pour chaque onde mais changeant de façon aléatoire entre deux ondes planes progressives monochromatiques.\n\nLes détecteurs optiques sont sensibles à la valeur moyenne dans le temps du carré du champ électrique (c'est l'intensité lumineuse) sur des durées de l'ordre de 10⁻¹² s (œil) à 10⁻⁶ s (bonne cellule photoélectrique). Ils ne peuvent donc pas suivre la polarisation d'une des OPPM dont la succession forme la lumière visible : on dit que la lumière naturelle n'est pas polarisée.\n\n[An image of a world map silhouette is present at the bottom of the page]\n\n21",
                "md": "Pour la plupart des sources lumineuses classiques, la lumière émise correspond à une superposition d'OPPM de durées très courtes (de l'ordre de 10⁻¹⁰ s, mais n'oublions pas que la période des ces ondes est de l'ordre de 10⁻¹⁵ s) et de polarisation bien fixée pour chaque onde mais changeant de façon aléatoire entre deux ondes planes progressives monochromatiques.\n\nLes détecteurs optiques sont sensibles à la valeur moyenne dans le temps du carré du champ électrique (c'est l'intensité lumineuse) sur des durées de l'ordre de 10⁻¹² s (œil) à 10⁻⁶ s (bonne cellule photoélectrique). Ils ne peuvent donc pas suivre la polarisation d'une des OPPM dont la succession forme la lumière visible : on dit que la lumière naturelle n'est pas polarisée.\n\n[An image of a world map silhouette is present at the bottom of the page]\n\n21",
                "bBox": {
                    "x": 292,
                    "y": 802,
                    "w": 10.02,
                    "h": 9.96
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 22,
        "text": "                                                               Annexe\n             (Intérêt de l'étude de la propagation des ondes radio (Wikipédia))\n\n\n\n   Il  peut  être  essentiel  de  comprendre  les  principes  de  la  propagation  des  ondes  pour  pouvoir\n   prédire les chances et les conditions d'établissement d'une liaison radio entre deux points de la\n   surface de la Terre ou entre la Terre et un satellite.\n   Cela permet par exemple :\n•            Le  calcul  de  la  puissance  minimale  d'un  émetteur  de  radiodiffusion  afin  d'assurer  une\n   réception confortable sur une zone déterminée ;\n•            la détermination de la position d'un relais pour la radiotéléphonie mobile ;\n•            l'estimation  des  chances  d'établissement  d'une  liaison  transcontinentale  sur  ondes\n   courtes ;\n•            l'étude des phénomènes d'interférence entre émetteurs ;\n•            le  calcul  du  champ  électromagnétique  à  proximité  d'un  équipement  d'émission  (radar,\n   relais,  émetteur  de  télévision...)  pour  déterminer  les  risques  encourus  par  la  population  se\n   trouvant à proximité.\n   Le niveau du signal reçu à l'extrémité du parcours sera plus ou moins élevé donc plus ou moins\n   exploitable en fonction de la fréquence d'émission, l'époque par rapport au cycle solaire, la saison,\n   l'heure du jour, la direction et la distance entre l'émetteur et la station réceptrice, ... . L'étude des\n   lignes de transmission et des phénomènes de propagation d'un signal dans une ligne peut aider à\n   optimiser  les  câbles  utilisés  dans  l'établissement  d'un  réseau  de  transmission  ou  pour\n   l'alimentation d'une antenne.\n   Dans l'espace :\n•            Déplacement d'une onde électromagnétique dans l'espace\n   Les ondes provoquées par la chute d'un caillou à la surface d'un étang se propagent comme des\n   cercles  concentriques.  L'onde  radio  émise  par  l'antenne  isotropique  (c'est-à-dire  rayonnant  de\n   façon uniforme dans toutes les directions de l'espace) peut être représentée par une succession de\n   sphères concentriques. On peut imaginer une bulle se gonflant très vite, à la vitesse de la lumière\n   c, très proche de 300 000 km par seconde. Au bout d'une seconde la sphère a 600 000 km de\n   diamètre. Si le milieu de propagation n'est pas isotrope et homogène, le front de l'onde ne sera\n   pas une sphère.\n   Comme  une  onde  radio  est  une  vibration,  au  bout  d'une  période,  l'onde  aura  parcouru  une\n   distance  lambda  appelée  longueur  d'onde.  La  longueur  d'onde  est  une  caractéristique  essentielle\n   dans  l'étude  de  la  propagation ;  pour  une  fréquence  donnée  elle  dépend  de  la  vitesse  de\n   propagation de l'onde.\n•            Variations du champ électrique\n   Plus  on  s'éloigne  de  l'antenne,  plus  l'intensité  du  champ  électromagnétique  rayonné  est  faible.\n   Cette variation est régulière dans un espace homogène, dans le vide, par exemple. À la surface de\n   la  Terre,  de  nombreux  phénomènes  viennent  contredire  cette  règle :  il  est  fréquent  que  l'onde\n   reçue  directement  interfère  avec  une  réflexion  de  cette  onde  sur  le  sol,  un  obstacle  ou  sur  une\n   couche de l'ionosphère.\n   Pour une bonne réception, il est nécessaire que le champ électrique de l'onde captée ait un niveau\n   suffisant.  La  valeur  minimale  de  ce  niveau  dépend  de  la  sensibilité  du  récepteur,  du  gain  de\n\n\n\n                                                                    22",
        "md": "# Annexe\n\n## (Intérêt de l'étude de la propagation des ondes radio (Wikipédia))\n\nIl peut être essentiel de comprendre les principes de la propagation des ondes pour pouvoir prédire les chances et les conditions d'établissement d'une liaison radio entre deux points de la surface de la Terre ou entre la Terre et un satellite.\n\nCela permet par exemple :\n\n- Le calcul de la puissance minimale d'un émetteur de radiodiffusion afin d'assurer une réception confortable sur une zone déterminée ;\n\n- la détermination de la position d'un relais pour la radiotéléphonie mobile ;\n\n- l'estimation des chances d'établissement d'une liaison transcontinentale sur ondes courtes ;\n\n- l'étude des phénomènes d'interférence entre émetteurs ;\n\n- le calcul du champ électromagnétique à proximité d'un équipement d'émission (radar, relais, émetteur de télévision...) pour déterminer les risques encourus par la population se trouvant à proximité.\n\nLe niveau du signal reçu à l'extrémité du parcours sera plus ou moins élevé donc plus ou moins exploitable en fonction de la fréquence d'émission, l'époque par rapport au cycle solaire, la saison, l'heure du jour, la direction et la distance entre l'émetteur et la station réceptrice, ... . L'étude des lignes de transmission et des phénomènes de propagation d'un signal dans une ligne peut aider à optimiser les câbles utilisés dans l'établissement d'un réseau de transmission ou pour l'alimentation d'une antenne.\n\n### Dans l'espace :\n\n#### Déplacement d'une onde électromagnétique dans l'espace\n\nLes ondes provoquées par la chute d'un caillou à la surface d'un étang se propagent comme des cercles concentriques. L'onde radio émise par l'antenne isotropique (c'est-à-dire rayonnant de façon uniforme dans toutes les directions de l'espace) peut être représentée par une succession de sphères concentriques. On peut imaginer une bulle se gonflant très vite, à la vitesse de la lumière c, très proche de 300 000 km par seconde. Au bout d'une seconde la sphère a 600 000 km de diamètre. Si le milieu de propagation n'est pas isotrope et homogène, le front de l'onde ne sera pas une sphère.\n\nComme une onde radio est une vibration, au bout d'une période, l'onde aura parcouru une distance lambda appelée longueur d'onde. La longueur d'onde est une caractéristique essentielle dans l'étude de la propagation ; pour une fréquence donnée elle dépend de la vitesse de propagation de l'onde.\n\n#### Variations du champ électrique\n\nPlus on s'éloigne de l'antenne, plus l'intensité du champ électromagnétique rayonné est faible. Cette variation est régulière dans un espace homogène, dans le vide, par exemple. À la surface de la Terre, de nombreux phénomènes viennent contredire cette règle : il est fréquent que l'onde reçue directement interfère avec une réflexion de cette onde sur le sol, un obstacle ou sur une couche de l'ionosphère.\n\nPour une bonne réception, il est nécessaire que le champ électrique de l'onde captée ait un niveau suffisant. La valeur minimale de ce niveau dépend de la sensibilité du récepteur, du gain de",
        "images": [
            {
                "name": "page_22.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "heading",
                "lvl": 1,
                "value": "Annexe",
                "md": "# Annexe",
                "bBox": {
                    "x": 275,
                    "y": 84,
                    "w": 45.23,
                    "h": 14.04
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "(Intérêt de l'étude de la propagation des ondes radio (Wikipédia))",
                "md": "## (Intérêt de l'étude de la propagation des ondes radio (Wikipédia))",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Il peut être essentiel de comprendre les principes de la propagation des ondes pour pouvoir prédire les chances et les conditions d'établissement d'une liaison radio entre deux points de la surface de la Terre ou entre la Terre et un satellite.\n\nCela permet par exemple :\n\n- Le calcul de la puissance minimale d'un émetteur de radiodiffusion afin d'assurer une réception confortable sur une zone déterminée ;\n\n- la détermination de la position d'un relais pour la radiotéléphonie mobile ;\n\n- l'estimation des chances d'établissement d'une liaison transcontinentale sur ondes courtes ;\n\n- l'étude des phénomènes d'interférence entre émetteurs ;\n\n- le calcul du champ électromagnétique à proximité d'un équipement d'émission (radar, relais, émetteur de télévision...) pour déterminer les risques encourus par la population se trouvant à proximité.\n\nLe niveau du signal reçu à l'extrémité du parcours sera plus ou moins élevé donc plus ou moins exploitable en fonction de la fréquence d'émission, l'époque par rapport au cycle solaire, la saison, l'heure du jour, la direction et la distance entre l'émetteur et la station réceptrice, ... . L'étude des lignes de transmission et des phénomènes de propagation d'un signal dans une ligne peut aider à optimiser les câbles utilisés dans l'établissement d'un réseau de transmission ou pour l'alimentation d'une antenne.",
                "md": "Il peut être essentiel de comprendre les principes de la propagation des ondes pour pouvoir prédire les chances et les conditions d'établissement d'une liaison radio entre deux points de la surface de la Terre ou entre la Terre et un satellite.\n\nCela permet par exemple :\n\n- Le calcul de la puissance minimale d'un émetteur de radiodiffusion afin d'assurer une réception confortable sur une zone déterminée ;\n\n- la détermination de la position d'un relais pour la radiotéléphonie mobile ;\n\n- l'estimation des chances d'établissement d'une liaison transcontinentale sur ondes courtes ;\n\n- l'étude des phénomènes d'interférence entre émetteurs ;\n\n- le calcul du champ électromagnétique à proximité d'un équipement d'émission (radar, relais, émetteur de télévision...) pour déterminer les risques encourus par la population se trouvant à proximité.\n\nLe niveau du signal reçu à l'extrémité du parcours sera plus ou moins élevé donc plus ou moins exploitable en fonction de la fréquence d'émission, l'époque par rapport au cycle solaire, la saison, l'heure du jour, la direction et la distance entre l'émetteur et la station réceptrice, ... . L'étude des lignes de transmission et des phénomènes de propagation d'un signal dans une ligne peut aider à optimiser les câbles utilisés dans l'établissement d'un réseau de transmission ou pour l'alimentation d'une antenne.",
                "bBox": {
                    "x": 70,
                    "y": 161,
                    "w": 456.5,
                    "h": 257
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Dans l'espace :",
                "md": "### Dans l'espace :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "heading",
                "lvl": 4,
                "value": "Déplacement d'une onde électromagnétique dans l'espace",
                "md": "#### Déplacement d'une onde électromagnétique dans l'espace",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Les ondes provoquées par la chute d'un caillou à la surface d'un étang se propagent comme des cercles concentriques. L'onde radio émise par l'antenne isotropique (c'est-à-dire rayonnant de façon uniforme dans toutes les directions de l'espace) peut être représentée par une succession de sphères concentriques. On peut imaginer une bulle se gonflant très vite, à la vitesse de la lumière c, très proche de 300 000 km par seconde. Au bout d'une seconde la sphère a 600 000 km de diamètre. Si le milieu de propagation n'est pas isotrope et homogène, le front de l'onde ne sera pas une sphère.\n\nComme une onde radio est une vibration, au bout d'une période, l'onde aura parcouru une distance lambda appelée longueur d'onde. La longueur d'onde est une caractéristique essentielle dans l'étude de la propagation ; pour une fréquence donnée elle dépend de la vitesse de propagation de l'onde.",
                "md": "Les ondes provoquées par la chute d'un caillou à la surface d'un étang se propagent comme des cercles concentriques. L'onde radio émise par l'antenne isotropique (c'est-à-dire rayonnant de façon uniforme dans toutes les directions de l'espace) peut être représentée par une succession de sphères concentriques. On peut imaginer une bulle se gonflant très vite, à la vitesse de la lumière c, très proche de 300 000 km par seconde. Au bout d'une seconde la sphère a 600 000 km de diamètre. Si le milieu de propagation n'est pas isotrope et homogène, le front de l'onde ne sera pas une sphère.\n\nComme une onde radio est une vibration, au bout d'une période, l'onde aura parcouru une distance lambda appelée longueur d'onde. La longueur d'onde est une caractéristique essentielle dans l'étude de la propagation ; pour une fréquence donnée elle dépend de la vitesse de propagation de l'onde.",
                "bBox": {
                    "x": 70,
                    "y": 491,
                    "w": 456.88,
                    "h": 80
                }
            },
            {
                "type": "heading",
                "lvl": 4,
                "value": "Variations du champ électrique",
                "md": "#### Variations du champ électrique",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Plus on s'éloigne de l'antenne, plus l'intensité du champ électromagnétique rayonné est faible. Cette variation est régulière dans un espace homogène, dans le vide, par exemple. À la surface de la Terre, de nombreux phénomènes viennent contredire cette règle : il est fréquent que l'onde reçue directement interfère avec une réflexion de cette onde sur le sol, un obstacle ou sur une couche de l'ionosphère.\n\nPour une bonne réception, il est nécessaire que le champ électrique de l'onde captée ait un niveau suffisant. La valeur minimale de ce niveau dépend de la sensibilité du récepteur, du gain de",
                "md": "Plus on s'éloigne de l'antenne, plus l'intensité du champ électromagnétique rayonné est faible. Cette variation est régulière dans un espace homogène, dans le vide, par exemple. À la surface de la Terre, de nombreux phénomènes viennent contredire cette règle : il est fréquent que l'onde reçue directement interfère avec une réflexion de cette onde sur le sol, un obstacle ou sur une couche de l'ionosphère.\n\nPour une bonne réception, il est nécessaire que le champ électrique de l'onde captée ait un niveau suffisant. La valeur minimale de ce niveau dépend de la sensibilité du récepteur, du gain de",
                "bBox": {
                    "x": 70,
                    "y": 685,
                    "w": 456.53,
                    "h": 72
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 23,
        "text": "   l'antenne et du confort d'écoute souhaité. Dans le cas des transmissions numériques le confort\n   d'écoute est remplacé par le niveau de fiabilité requis pour la transmission.\n   L'intensité du champ électrique se mesure en volt/mètre.\n\n   Application des phénomènes d'optique à la propagation des ondes radio :\n   Une onde radio se distingue d'un rayonnement lumineux par sa fréquence : quelques dizaines de\n   kilohertz  ou  gigahertz  pour  la  première,  quelques  centaines  de  térahertz  pour  la  seconde.\n   Évidemment l'influence de la fréquence de l'onde est déterminante pour sa propagation mais la\n   plupart  des  phénomènes  d'optique  géométrique  (réflexion...)  s'appliquent  aussi  dans  la\n   propagation  des  ondes  hertziennes.  Dans  la  pratique  il  est  fréquent  que  deux  ou  plusieurs\n   phénomènes s'appliquent simultanément au trajet d'une onde : réflexion et diffusion, diffusion et\n   réfraction...  Ces  phénomènes  appliqués  aux  ondes  radioélectriques  permettent  souvent  d'établir\n   des liaisons entre des points qui ne sont pas en vue directe.\n   Réflexion des ondes radio :\n   Une  onde  peut  se  réfléchir  sur  une  surface  comme  le  sol,  la  surface  de  l'eau,  un  mur  ou  une\n   voiture. On parle de réflexion spéculaire lorsque l'onde se réfléchit comme un rayon lumineux le\n   ferait  sur  un  miroir.  Une  onde  dont  la  fréquence  est  de  l'ordre  de  quelques  mégahertz  peut  se\n   réfléchir sur une des couches ionisées de la haute atmosphère. La réflexion d'une onde est plus\n   généralement diffuse, l'onde se réfléchissant dans plusieurs directions ainsi qu'un rayon lumineux\n   frappant  une  surface  mate.  Une  antenne  ou  un  miroir  paraboliques  fonctionnent  de  façon\n   similaire.\n   Réfraction des ondes radio :\n   Comme  un  rayon  lumineux  est  dévié  lorsqu'il  passe  d'un  milieu  d'indice  de  réfraction  n1  à  un\n   autre d'indice n, une onde radio peut subir un changement de direction dépendant à la fois de sa 2\n   fréquence  et  de  la  variation  de  l'indice  de  réfraction.  Ce  phénomène  est  particulièrement\n   important  dans  le  cas  de  la  propagation  ionosphérique,  la  réflexion  que  subit  une  onde\n   décamétrique  dans  l'ionosphère  est  en  fait  une  suite  continue  de  réfractions.  Il  est  possible  de\n   reproduire avec une onde radio dont la longueur d'onde est de quelques centimètres à quelques\n   décimètres le phénomène observé avec une lentille ou un prisme en optique classique.\n   Diffusion des ondes radio :\n   Le  phénomène  de  diffusion  peut  se  produire  quand  une  onde  rencontre  un  obstacle  dont  la\n   surface n'est pas parfaitement plane et lisse. C'est le cas des couches ionisées, de la surface du sol\n   dans  les  régions  vallonnées  (pour  les  longueurs  d'ondes  les  plus  grandes)  ou  de  la  surface  des\n   obstacles  (falaises,  forêts,  constructions...)  pour  les  ondes  ultra-courtes  (au-dessus  de  quelques\n   centaines  de  mégahertz).  Comme  en  optique,  la  diffusion  dépend  du  rapport  entre  la  longueur\n   d'onde  et  les  dimensions  des  obstacles  ou  des  irrégularités  à  la  surface  des  obstacles\n   réfléchissants.  Ces  derniers  peuvent  être  aussi  variés  que  des  rideaux  de  pluie  (en\n   hyperfréquences) ou les zones ionisées de la haute atmosphère lors des aurores polaires.\n   Interférence de deux ondes radio :\n   Il  faut  distinguer  le  brouillage  occasionné  par  deux  signaux  indépendants,  mais  possédant  des\n   fréquences  très  proches,  du  phénomène  d'interférence  apparaissant  lorsque  l'onde  directe\n   rayonnée par un émetteur est reçue en même temps qu'une onde réfléchie. Dans ce dernier cas,\n   les  temps  de  parcours  des  deux  ondes  sont  différents  et  les  deux  signaux  reçus  sont  déphasés.\n   Plusieurs cas peuvent alors se présenter :\n•             déphasage  égal  à  un  multiple  de  la  période :  les  signaux  sont  en  phase  et  se  renforcent\n   mutuellement. Leurs amplitudes s'ajoutent.\n\n\n\n                                                                    23",
        "md": "l'antenne et du confort d'écoute souhaité. Dans le cas des transmissions numériques le confort d'écoute est remplacé par le niveau de fiabilité requis pour la transmission.\n\nL'intensité du champ électrique se mesure en volt/mètre.\n\n## Application des phénomènes d'optique à la propagation des ondes radio :\n\nUne onde radio se distingue d'un rayonnement lumineux par sa fréquence : quelques dizaines de kilohertz ou gigahertz pour la première, quelques centaines de térahertz pour la seconde. Évidemment l'influence de la fréquence de l'onde est déterminante pour sa propagation mais la plupart des phénomènes d'optique géométrique (réflexion...) s'appliquent aussi dans la propagation des ondes hertziennes. Dans la pratique il est fréquent que deux ou plusieurs phénomènes s'appliquent simultanément au trajet d'une onde : réflexion et diffusion, diffusion et réfraction... Ces phénomènes appliqués aux ondes radioélectriques permettent souvent d'établir des liaisons entre des points qui ne sont pas en vue directe.\n\n### Réflexion des ondes radio :\n\nUne onde peut se réfléchir sur une surface comme le sol, la surface de l'eau, un mur ou une voiture. On parle de réflexion spéculaire lorsque l'onde se réfléchit comme un rayon lumineux le ferait sur un miroir. Une onde dont la fréquence est de l'ordre de quelques mégahertz peut se réfléchir sur une des couches ionisées de la haute atmosphère. La réflexion d'une onde est plus généralement diffuse, l'onde se réfléchissant dans plusieurs directions ainsi qu'un rayon lumineux frappant une surface mate. Une antenne ou un miroir paraboliques fonctionnent de façon similaire.\n\n### Réfraction des ondes radio :\n\nComme un rayon lumineux est dévié lorsqu'il passe d'un milieu d'indice de réfraction n₁ à un autre d'indice n₂, une onde radio peut subir un changement de direction dépendant à la fois de sa fréquence et de la variation de l'indice de réfraction. Ce phénomène est particulièrement important dans le cas de la propagation ionosphérique, la réflexion que subit une onde décamétrique dans l'ionosphère est en fait une suite continue de réfractions. Il est possible de reproduire avec une onde radio dont la longueur d'onde est de quelques centimètres à quelques décimètres le phénomène observé avec une lentille ou un prisme en optique classique.\n\n### Diffusion des ondes radio :\n\nLe phénomène de diffusion peut se produire quand une onde rencontre un obstacle dont la surface n'est pas parfaitement plane et lisse. C'est le cas des couches ionisées, de la surface du sol dans les régions vallonnées (pour les longueurs d'ondes les plus grandes) ou de la surface des obstacles (falaises, forêts, constructions...) pour les ondes ultra-courtes (au-dessus de quelques centaines de mégahertz). Comme en optique, la diffusion dépend du rapport entre la longueur d'onde et les dimensions des obstacles ou des irrégularités à la surface des obstacles réfléchissants. Ces derniers peuvent être aussi variés que des rideaux de pluie (en hyperfréquences) ou les zones ionisées de la haute atmosphère lors des aurores polaires.\n\n### Interférence de deux ondes radio :\n\nIl faut distinguer le brouillage occasionné par deux signaux indépendants, mais possédant des fréquences très proches, du phénomène d'interférence apparaissant lorsque l'onde directe rayonnée par un émetteur est reçue en même temps qu'une onde réfléchie. Dans ce dernier cas, les temps de parcours des deux ondes sont différents et les deux signaux reçus sont déphasés. Plusieurs cas peuvent alors se présenter :\n\n- déphasage égal à un multiple de la période : les signaux sont en phase et se renforcent mutuellement. Leurs amplitudes s'ajoutent.",
        "images": [
            {
                "name": "page_23.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "l'antenne et du confort d'écoute souhaité. Dans le cas des transmissions numériques le confort d'écoute est remplacé par le niveau de fiabilité requis pour la transmission.\n\nL'intensité du champ électrique se mesure en volt/mètre.",
                "md": "l'antenne et du confort d'écoute souhaité. Dans le cas des transmissions numériques le confort d'écoute est remplacé par le niveau de fiabilité requis pour la transmission.\n\nL'intensité du champ électrique se mesure en volt/mètre.",
                "bBox": {
                    "x": 70,
                    "y": 82,
                    "w": 456.51,
                    "h": 12
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Application des phénomènes d'optique à la propagation des ondes radio :",
                "md": "## Application des phénomènes d'optique à la propagation des ondes radio :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Une onde radio se distingue d'un rayonnement lumineux par sa fréquence : quelques dizaines de kilohertz ou gigahertz pour la première, quelques centaines de térahertz pour la seconde. Évidemment l'influence de la fréquence de l'onde est déterminante pour sa propagation mais la plupart des phénomènes d'optique géométrique (réflexion...) s'appliquent aussi dans la propagation des ondes hertziennes. Dans la pratique il est fréquent que deux ou plusieurs phénomènes s'appliquent simultanément au trajet d'une onde : réflexion et diffusion, diffusion et réfraction... Ces phénomènes appliqués aux ondes radioélectriques permettent souvent d'établir des liaisons entre des points qui ne sont pas en vue directe.",
                "md": "Une onde radio se distingue d'un rayonnement lumineux par sa fréquence : quelques dizaines de kilohertz ou gigahertz pour la première, quelques centaines de térahertz pour la seconde. Évidemment l'influence de la fréquence de l'onde est déterminante pour sa propagation mais la plupart des phénomènes d'optique géométrique (réflexion...) s'appliquent aussi dans la propagation des ondes hertziennes. Dans la pratique il est fréquent que deux ou plusieurs phénomènes s'appliquent simultanément au trajet d'une onde : réflexion et diffusion, diffusion et réfraction... Ces phénomènes appliqués aux ondes radioélectriques permettent souvent d'établir des liaisons entre des points qui ne sont pas en vue directe.",
                "bBox": {
                    "x": 70,
                    "y": 173,
                    "w": 456.52,
                    "h": 80
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Réflexion des ondes radio :",
                "md": "### Réflexion des ondes radio :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Une onde peut se réfléchir sur une surface comme le sol, la surface de l'eau, un mur ou une voiture. On parle de réflexion spéculaire lorsque l'onde se réfléchit comme un rayon lumineux le ferait sur un miroir. Une onde dont la fréquence est de l'ordre de quelques mégahertz peut se réfléchir sur une des couches ionisées de la haute atmosphère. La réflexion d'une onde est plus généralement diffuse, l'onde se réfléchissant dans plusieurs directions ainsi qu'un rayon lumineux frappant une surface mate. Une antenne ou un miroir paraboliques fonctionnent de façon similaire.",
                "md": "Une onde peut se réfléchir sur une surface comme le sol, la surface de l'eau, un mur ou une voiture. On parle de réflexion spéculaire lorsque l'onde se réfléchit comme un rayon lumineux le ferait sur un miroir. Une onde dont la fréquence est de l'ordre de quelques mégahertz peut se réfléchir sur une des couches ionisées de la haute atmosphère. La réflexion d'une onde est plus généralement diffuse, l'onde se réfléchissant dans plusieurs directions ainsi qu'un rayon lumineux frappant une surface mate. Une antenne ou un miroir paraboliques fonctionnent de façon similaire.",
                "bBox": {
                    "x": 70,
                    "y": 320,
                    "w": 456.5,
                    "h": 53
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Réfraction des ondes radio :",
                "md": "### Réfraction des ondes radio :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Comme un rayon lumineux est dévié lorsqu'il passe d'un milieu d'indice de réfraction n₁ à un autre d'indice n₂, une onde radio peut subir un changement de direction dépendant à la fois de sa fréquence et de la variation de l'indice de réfraction. Ce phénomène est particulièrement important dans le cas de la propagation ionosphérique, la réflexion que subit une onde décamétrique dans l'ionosphère est en fait une suite continue de réfractions. Il est possible de reproduire avec une onde radio dont la longueur d'onde est de quelques centimètres à quelques décimètres le phénomène observé avec une lentille ou un prisme en optique classique.",
                "md": "Comme un rayon lumineux est dévié lorsqu'il passe d'un milieu d'indice de réfraction n₁ à un autre d'indice n₂, une onde radio peut subir un changement de direction dépendant à la fois de sa fréquence et de la variation de l'indice de réfraction. Ce phénomène est particulièrement important dans le cas de la propagation ionosphérique, la réflexion que subit une onde décamétrique dans l'ionosphère est en fait une suite continue de réfractions. Il est possible de reproduire avec une onde radio dont la longueur d'onde est de quelques centimètres à quelques décimètres le phénomène observé avec une lentille ou un prisme en optique classique.",
                "bBox": {
                    "x": 70,
                    "y": 494,
                    "w": 456.58,
                    "h": 12
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Diffusion des ondes radio :",
                "md": "### Diffusion des ondes radio :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Le phénomène de diffusion peut se produire quand une onde rencontre un obstacle dont la surface n'est pas parfaitement plane et lisse. C'est le cas des couches ionisées, de la surface du sol dans les régions vallonnées (pour les longueurs d'ondes les plus grandes) ou de la surface des obstacles (falaises, forêts, constructions...) pour les ondes ultra-courtes (au-dessus de quelques centaines de mégahertz). Comme en optique, la diffusion dépend du rapport entre la longueur d'onde et les dimensions des obstacles ou des irrégularités à la surface des obstacles réfléchissants. Ces derniers peuvent être aussi variés que des rideaux de pluie (en hyperfréquences) ou les zones ionisées de la haute atmosphère lors des aurores polaires.",
                "md": "Le phénomène de diffusion peut se produire quand une onde rencontre un obstacle dont la surface n'est pas parfaitement plane et lisse. C'est le cas des couches ionisées, de la surface du sol dans les régions vallonnées (pour les longueurs d'ondes les plus grandes) ou de la surface des obstacles (falaises, forêts, constructions...) pour les ondes ultra-courtes (au-dessus de quelques centaines de mégahertz). Comme en optique, la diffusion dépend du rapport entre la longueur d'onde et les dimensions des obstacles ou des irrégularités à la surface des obstacles réfléchissants. Ces derniers peuvent être aussi variés que des rideaux de pluie (en hyperfréquences) ou les zones ionisées de la haute atmosphère lors des aurores polaires.",
                "bBox": {
                    "x": 70,
                    "y": 560,
                    "w": 456.48,
                    "h": 12
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Interférence de deux ondes radio :",
                "md": "### Interférence de deux ondes radio :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Il faut distinguer le brouillage occasionné par deux signaux indépendants, mais possédant des fréquences très proches, du phénomène d'interférence apparaissant lorsque l'onde directe rayonnée par un émetteur est reçue en même temps qu'une onde réfléchie. Dans ce dernier cas, les temps de parcours des deux ondes sont différents et les deux signaux reçus sont déphasés. Plusieurs cas peuvent alors se présenter :\n\n- déphasage égal à un multiple de la période : les signaux sont en phase et se renforcent mutuellement. Leurs amplitudes s'ajoutent.",
                "md": "Il faut distinguer le brouillage occasionné par deux signaux indépendants, mais possédant des fréquences très proches, du phénomène d'interférence apparaissant lorsque l'onde directe rayonnée par un émetteur est reçue en même temps qu'une onde réfléchie. Dans ce dernier cas, les temps de parcours des deux ondes sont différents et les deux signaux reçus sont déphasés. Plusieurs cas peuvent alors se présenter :\n\n- déphasage égal à un multiple de la période : les signaux sont en phase et se renforcent mutuellement. Leurs amplitudes s'ajoutent.",
                "bBox": {
                    "x": 70,
                    "y": 707,
                    "w": 456.52,
                    "h": 12
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 24,
        "text": "•             déphasage d'un multiple d'une demi-période : les signaux sont en opposition de phase et\n   l'amplitude  du  plus  faible  se  déduit  de  celle  du  plus  fort.  Si  les  deux  signaux  ont  la  même\n   amplitude, le niveau du signal résultant est nul.\n•             déphasage  quelconque :  l'amplitude  du  signal  résultant  est  intermédiaire  entre  ces  deux\n   valeurs extrêmes.\n   Les phénomènes d'interférences peuvent être très gênants lorsque le temps de parcours de l'onde\n   indirecte  varie :  l'amplitude  du  signal  reçu  varie  alors  à  un  rythme  plus  ou  moins  rapide.  Le\n   phénomène  d'interférence  est  utilisé  dans  des  applications  couvrant  de  nombreux  domaines :\n   mesure de vitesse, radiogoniométrie, ...\n   Propagation en fonction de la gamme de fréquence :\n   Ondes kilométriques :\n   Elles  se  propagent  principalement  à  très  basse  altitude,  par  onde  de  sol.  Leur  grande  longueur\n   d'onde permet le contournement des obstacles. Pour une même distance de l'émetteur, le niveau\n   du signal reçu est très stable. Ce niveau décroît d'autant plus vite que la fréquence est élevée. Les\n   ondes de fréquence très basse pénètrent un peu sous la surface du sol ou de la mer, ce qui permet\n   de communiquer avec des sous-marins en plongée.\n   Applications courantes : radiodiffusion sur Grandes Ondes (France-Inter, RTL...), diffusion des\n   signaux horaires (horloges radio-pilotées)... La puissance de ces émetteurs est énorme : souvent\n   plusieurs mégawatts pour obtenir une portée pouvant aller jusqu'à 1000 km.\n   Ondes hectométriques :\n   Les  stations  de  radiodiffusion  sur  la  bande  des  Petites  Ondes  (entre  600  et  1500kHz)  ont  des\n   puissances pouvant aller jusqu'à plusieurs centaines de kilowatts. Elles utilisent encore l'onde de\n   sol  pour  couvrir  une  zone  ne  dépassant  guère  une  région  française  mais  bénéficient  après  le\n   coucher du soleil des phénomènes de propagation ionosphérique.\n   Ondes décamétriques :\n   Les  ondes  courtes,  bien  connues  des  radioamateurs,  permettent  des  liaisons  intercontinentales\n   avec des puissances de quelques milliwatts si la propagation ionosphérique le permet car l'onde de\n   sol au-dessus de 2 ou 3 MHz ne porte guère au-delà de quelques dizaines de kilomètres. Entre 1\n   et  30  MHz,  la  réflexion  des  ondes  sur  les  couches  de  l'ionosphère  permet  de  s'affranchir  du\n   problème de l'horizon optique et d'obtenir en un seul bond une portée de plusieurs milliers de\n   kilomètres. Mais ces résultats sont très variables et dépendent des modes de propagation du cycle\n   solaire,  de  l'heure  de  la  journée  ou  de  la  saison.  Les  ondes  décamétriques  ont  cédé  le  pas  aux\n   satellites même si des calculs de prévision de propagation permettent de prédire avec une bonne\n   fiabilité  les  heures  d'ouverture,  les  fréquences  maxima  utilisables et  le  niveau  du  signal  qui  sera\n   reçu.\n   Ondes métriques :\n   Les ondes métriques correspondent à des fréquences comprises entre 30 et 300 MHz incluant la\n   bande de radiodiffusion FM, les transmissions VHF des avions, la bande radioamateur des 2m...\n   On les appelle aussi ondes ultra-courtes (OUC). Elles se propagent principalement en ligne droite\n   mais  réussissent  à  contourner  les  obstacles  de  dimensions  ne  dépassant  pas  quelques  mètres.\n   Elles se réfléchissent sur les murs, rochers, véhicules et exceptionnellement sur des nuages ionisés\n   situés dans la couche E, vers 110 km d'altitude ce qui permet des liaisons à plus de 1000 km. En\n   temps  normal,  la  portée  d'un  émetteur  de  10  watts  avec  une  antenne  omnidirective  est  de\n   quelques dizaines de kilomètres mais il arrive aussi que l'indice de réfraction pour ces fréquences\n   fasse s'incurver vers le  sol une onde qui se  serait  perdue dans l'espace. Des liaisons à quelques\n   centaines  de  kilomètres  sont  alors  possibles.  Certains  radioamateurs  effectuent  des  liaisons  à\n\n\n\n                                                                    24",
        "md": "• déphasage d'un multiple d'une demi-période : les signaux sont en opposition de phase et l'amplitude du plus faible se déduit de celle du plus fort. Si les deux signaux ont la même amplitude, le niveau du signal résultant est nul.\n\n• déphasage quelconque : l'amplitude du signal résultant est intermédiaire entre ces deux valeurs extrêmes.\n\nLes phénomènes d'interférences peuvent être très gênants lorsque le temps de parcours de l'onde indirecte varie : l'amplitude du signal reçu varie alors à un rythme plus ou moins rapide. Le phénomène d'interférence est utilisé dans des applications couvrant de nombreux domaines : mesure de vitesse, radiogoniométrie, ...\n\n## Propagation en fonction de la gamme de fréquence :\n\n### Ondes kilométriques :\n\nElles se propagent principalement à très basse altitude, par onde de sol. Leur grande longueur d'onde permet le contournement des obstacles. Pour une même distance de l'émetteur, le niveau du signal reçu est très stable. Ce niveau décroît d'autant plus vite que la fréquence est élevée. Les ondes de fréquence très basse pénètrent un peu sous la surface du sol ou de la mer, ce qui permet de communiquer avec des sous-marins en plongée.\n\nApplications courantes : radiodiffusion sur Grandes Ondes (France-Inter, RTL...), diffusion des signaux horaires (horloges radio-pilotées)... La puissance de ces émetteurs est énorme : souvent plusieurs mégawatts pour obtenir une portée pouvant aller jusqu'à 1000 km.\n\n### Ondes hectométriques :\n\nLes stations de radiodiffusion sur la bande des Petites Ondes (entre 600 et 1500kHz) ont des puissances pouvant aller jusqu'à plusieurs centaines de kilowatts. Elles utilisent encore l'onde de sol pour couvrir une zone ne dépassant guère une région française mais bénéficient après le coucher du soleil des phénomènes de propagation ionosphérique.\n\n### Ondes décamétriques :\n\nLes ondes courtes, bien connues des radioamateurs, permettent des liaisons intercontinentales avec des puissances de quelques milliwatts si la propagation ionosphérique le permet car l'onde de sol au-dessus de 2 ou 3 MHz ne porte guère au-delà de quelques dizaines de kilomètres. Entre 1 et 30 MHz, la réflexion des ondes sur les couches de l'ionosphère permet de s'affranchir du problème de l'horizon optique et d'obtenir en un seul bond une portée de plusieurs milliers de kilomètres. Mais ces résultats sont très variables et dépendent des modes de propagation du cycle solaire, de l'heure de la journée ou de la saison. Les ondes décamétriques ont cédé le pas aux satellites même si des calculs de prévision de propagation permettent de prédire avec une bonne fiabilité les heures d'ouverture, les fréquences maxima utilisables et le niveau du signal qui sera reçu.\n\n### Ondes métriques :\n\nLes ondes métriques correspondent à des fréquences comprises entre 30 et 300 MHz incluant la bande de radiodiffusion FM, les transmissions VHF des avions, la bande radioamateur des 2m... On les appelle aussi ondes ultra-courtes (OUC). Elles se propagent principalement en ligne droite mais réussissent à contourner les obstacles de dimensions ne dépassant pas quelques mètres. Elles se réfléchissent sur les murs, rochers, véhicules et exceptionnellement sur des nuages ionisés situés dans la couche E, vers 110 km d'altitude ce qui permet des liaisons à plus de 1000 km. En temps normal, la portée d'un émetteur de 10 watts avec une antenne omnidirective est de quelques dizaines de kilomètres mais il arrive aussi que l'indice de réfraction pour ces fréquences fasse s'incurver vers le sol une onde qui se serait perdue dans l'espace. Des liaisons à quelques centaines de kilomètres sont alors possibles. Certains radioamateurs effectuent des liaisons à",
        "images": [
            {
                "name": "page_24.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "• déphasage d'un multiple d'une demi-période : les signaux sont en opposition de phase et l'amplitude du plus faible se déduit de celle du plus fort. Si les deux signaux ont la même amplitude, le niveau du signal résultant est nul.\n\n• déphasage quelconque : l'amplitude du signal résultant est intermédiaire entre ces deux valeurs extrêmes.\n\nLes phénomènes d'interférences peuvent être très gênants lorsque le temps de parcours de l'onde indirecte varie : l'amplitude du signal reçu varie alors à un rythme plus ou moins rapide. Le phénomène d'interférence est utilisé dans des applications couvrant de nombreux domaines : mesure de vitesse, radiogoniométrie, ...",
                "md": "• déphasage d'un multiple d'une demi-période : les signaux sont en opposition de phase et l'amplitude du plus faible se déduit de celle du plus fort. Si les deux signaux ont la même amplitude, le niveau du signal résultant est nul.\n\n• déphasage quelconque : l'amplitude du signal résultant est intermédiaire entre ces deux valeurs extrêmes.\n\nLes phénomènes d'interférences peuvent être très gênants lorsque le temps de parcours de l'onde indirecte varie : l'amplitude du signal reçu varie alors à un rythme plus ou moins rapide. Le phénomène d'interférence est utilisé dans des applications couvrant de nombreux domaines : mesure de vitesse, radiogoniométrie, ...",
                "bBox": {
                    "x": 52,
                    "y": 82,
                    "w": 474.5,
                    "h": 91
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Propagation en fonction de la gamme de fréquence :",
                "md": "## Propagation en fonction de la gamme de fréquence :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Ondes kilométriques :",
                "md": "### Ondes kilométriques :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Elles se propagent principalement à très basse altitude, par onde de sol. Leur grande longueur d'onde permet le contournement des obstacles. Pour une même distance de l'émetteur, le niveau du signal reçu est très stable. Ce niveau décroît d'autant plus vite que la fréquence est élevée. Les ondes de fréquence très basse pénètrent un peu sous la surface du sol ou de la mer, ce qui permet de communiquer avec des sous-marins en plongée.\n\nApplications courantes : radiodiffusion sur Grandes Ondes (France-Inter, RTL...), diffusion des signaux horaires (horloges radio-pilotées)... La puissance de ces émetteurs est énorme : souvent plusieurs mégawatts pour obtenir une portée pouvant aller jusqu'à 1000 km.",
                "md": "Elles se propagent principalement à très basse altitude, par onde de sol. Leur grande longueur d'onde permet le contournement des obstacles. Pour une même distance de l'émetteur, le niveau du signal reçu est très stable. Ce niveau décroît d'autant plus vite que la fréquence est élevée. Les ondes de fréquence très basse pénètrent un peu sous la surface du sol ou de la mer, ce qui permet de communiquer avec des sous-marins en plongée.\n\nApplications courantes : radiodiffusion sur Grandes Ondes (France-Inter, RTL...), diffusion des signaux horaires (horloges radio-pilotées)... La puissance de ces émetteurs est énorme : souvent plusieurs mégawatts pour obtenir une portée pouvant aller jusqu'à 1000 km.",
                "bBox": {
                    "x": 70,
                    "y": 274,
                    "w": 456.59,
                    "h": 85
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Ondes hectométriques :",
                "md": "### Ondes hectométriques :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Les stations de radiodiffusion sur la bande des Petites Ondes (entre 600 et 1500kHz) ont des puissances pouvant aller jusqu'à plusieurs centaines de kilowatts. Elles utilisent encore l'onde de sol pour couvrir une zone ne dépassant guère une région française mais bénéficient après le coucher du soleil des phénomènes de propagation ionosphérique.",
                "md": "Les stations de radiodiffusion sur la bande des Petites Ondes (entre 600 et 1500kHz) ont des puissances pouvant aller jusqu'à plusieurs centaines de kilowatts. Elles utilisent encore l'onde de sol pour couvrir une zone ne dépassant guère une région française mais bénéficient après le coucher du soleil des phénomènes de propagation ionosphérique.",
                "bBox": {
                    "x": 70,
                    "y": 413,
                    "w": 456.54,
                    "h": 12
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Ondes décamétriques :",
                "md": "### Ondes décamétriques :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Les ondes courtes, bien connues des radioamateurs, permettent des liaisons intercontinentales avec des puissances de quelques milliwatts si la propagation ionosphérique le permet car l'onde de sol au-dessus de 2 ou 3 MHz ne porte guère au-delà de quelques dizaines de kilomètres. Entre 1 et 30 MHz, la réflexion des ondes sur les couches de l'ionosphère permet de s'affranchir du problème de l'horizon optique et d'obtenir en un seul bond une portée de plusieurs milliers de kilomètres. Mais ces résultats sont très variables et dépendent des modes de propagation du cycle solaire, de l'heure de la journée ou de la saison. Les ondes décamétriques ont cédé le pas aux satellites même si des calculs de prévision de propagation permettent de prédire avec une bonne fiabilité les heures d'ouverture, les fréquences maxima utilisables et le niveau du signal qui sera reçu.",
                "md": "Les ondes courtes, bien connues des radioamateurs, permettent des liaisons intercontinentales avec des puissances de quelques milliwatts si la propagation ionosphérique le permet car l'onde de sol au-dessus de 2 ou 3 MHz ne porte guère au-delà de quelques dizaines de kilomètres. Entre 1 et 30 MHz, la réflexion des ondes sur les couches de l'ionosphère permet de s'affranchir du problème de l'horizon optique et d'obtenir en un seul bond une portée de plusieurs milliers de kilomètres. Mais ces résultats sont très variables et dépendent des modes de propagation du cycle solaire, de l'heure de la journée ou de la saison. Les ondes décamétriques ont cédé le pas aux satellites même si des calculs de prévision de propagation permettent de prédire avec une bonne fiabilité les heures d'ouverture, les fréquences maxima utilisables et le niveau du signal qui sera reçu.",
                "bBox": {
                    "x": 70,
                    "y": 493,
                    "w": 456.54,
                    "h": 93
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Ondes métriques :",
                "md": "### Ondes métriques :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Les ondes métriques correspondent à des fréquences comprises entre 30 et 300 MHz incluant la bande de radiodiffusion FM, les transmissions VHF des avions, la bande radioamateur des 2m... On les appelle aussi ondes ultra-courtes (OUC). Elles se propagent principalement en ligne droite mais réussissent à contourner les obstacles de dimensions ne dépassant pas quelques mètres. Elles se réfléchissent sur les murs, rochers, véhicules et exceptionnellement sur des nuages ionisés situés dans la couche E, vers 110 km d'altitude ce qui permet des liaisons à plus de 1000 km. En temps normal, la portée d'un émetteur de 10 watts avec une antenne omnidirective est de quelques dizaines de kilomètres mais il arrive aussi que l'indice de réfraction pour ces fréquences fasse s'incurver vers le sol une onde qui se serait perdue dans l'espace. Des liaisons à quelques centaines de kilomètres sont alors possibles. Certains radioamateurs effectuent des liaisons à",
                "md": "Les ondes métriques correspondent à des fréquences comprises entre 30 et 300 MHz incluant la bande de radiodiffusion FM, les transmissions VHF des avions, la bande radioamateur des 2m... On les appelle aussi ondes ultra-courtes (OUC). Elles se propagent principalement en ligne droite mais réussissent à contourner les obstacles de dimensions ne dépassant pas quelques mètres. Elles se réfléchissent sur les murs, rochers, véhicules et exceptionnellement sur des nuages ionisés situés dans la couche E, vers 110 km d'altitude ce qui permet des liaisons à plus de 1000 km. En temps normal, la portée d'un émetteur de 10 watts avec une antenne omnidirective est de quelques dizaines de kilomètres mais il arrive aussi que l'indice de réfraction pour ces fréquences fasse s'incurver vers le sol une onde qui se serait perdue dans l'espace. Des liaisons à quelques centaines de kilomètres sont alors possibles. Certains radioamateurs effectuent des liaisons à",
                "bBox": {
                    "x": 70,
                    "y": 640,
                    "w": 456.55,
                    "h": 106
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 25,
        "text": "   grandes distances en profitant de la réflexion des ondes métriques sur les traces ionisées par les\n   chutes de météorites et aussi sur les zones ionisées associées aux aurores polaires.\n   Ondes décimétriques et hyperfréquences :\n   Plus  sa  fréquence  augmente,  plus  le  comportement  d'une  onde  ressemble  à  celui  d'un  rayon\n   lumineux. Les faisceaux hertziens permettent des liaisons à vue, comme le Télégraphe de Chappe,\n   mais par tous les temps et avec des débits d'informations des milliards de fois plus élevés. Aucun\n   obstacle de taille supérieure à quelques décimètres ne doit se trouver sur le trajet du faisceau. Ces\n   ondes  se  réfléchissent  facilement  sur  des  obstacles  de  quelques  mètres  de  dimension ;  ce\n   phénomène est exploité par les radars, y compris ceux utilisés aux bords des routes. C'est grâce\n   aux réflexions sur les bâtiments qu'il est possible d'utiliser un téléphone portable sans être en vue\n   directe  de  l'antenne  du  relais,  mais  les  interférences  entre  ondes  réfléchies  rendent  la\n   communication difficile, obligeant l'utilisateur à changer d'endroit ou à se déplacer de quelques\n   mètres  simplement.  Sur  10  GHz  avec  une  puissance  de  quelques  watts  et  des  antennes\n   paraboliques de moins d'un mètre de diamètre, il est possible d'effectuer des liaisons à plusieurs\n   centaines de kilomètres de distance en se servant d'une montagne élevée comme réflecteur. Au-\n   dessus  de  10  gigahertz,  le  phénomène  de  diffusion  peut  se  manifester  sur  des  nuages  de  pluie,\n   permettant à l'onde d'atteindre des endroits situés au-delà de l'horizon optique.\n   Prévisions de propagation :\n   Le niveau du signal émis par une station d'émission (émetteur et antenne) en un point de l'espace\n   (ou de la surface de la Terre) peut être calculé avec une bonne précision si les principaux facteurs\n   déterminant  la  transmission  sont  connus.  À  titre  d'exemple  prenons  deux  cas :  liaison  en  vue\n   directe sur 100 MHz et liaison à grande distance sur 10 MHz utilisant une réflexion sur la couche\n   E. Nous n'effectuerons évidemment pas ici les calculs.\n   Liaison directe sur 100 MHz :\n   On connaît :\n•             La puissance de sortie de l'émetteur ;\n•             Le diagramme de rayonnement de l'antenne d'émission et en particulier le gain de celle-ci\n   dans la direction qui nous intéresse et sa hauteur par rapport au sol ;\n•             Le profil du terrain entre la station d'émission et le point de réception, tenant compte de\n   la rotondité de la Terre ;\n•             La distance entre émetteur et point de réception ;\n   Des logiciels plus ou moins sophistiqués permettent de faire rapidement ce genre de calcul qui\n   peut éventuellement tenir compte de la conductivité du sol, des possibilités de réflexion, etc.\n   Si on ajoute les caractéristiques de la station de réception (antenne + récepteur), on pourra alors\n   calculer  le  bilan  de  la  liaison,  qui  donnera  la  différence  de  niveau  entre  le  signal  utile  et  le  bruit\n   radioélectrique.\n   Liaison utilisant une réflexion sur la couche E :\n   Les informations nécessaires sont :\n•             La puissance de l'émetteur ;\n•             le diagramme de rayonnement de l'antenne ;\n•             la position géographique de chacune des deux stations mais aussi ;\n•             la capacité de la couche E à réfléchir les ondes radio.\n\n\n\n                                                                    25",
        "md": "grandes distances en profitant de la réflexion des ondes métriques sur les traces ionisées par les chutes de météorites et aussi sur les zones ionisées associées aux aurores polaires.\n\n## Ondes décimétriques et hyperfréquences :\n\nPlus sa fréquence augmente, plus le comportement d'une onde ressemble à celui d'un rayon lumineux. Les faisceaux hertziens permettent des liaisons à vue, comme le Télégraphe de Chappe, mais par tous les temps et avec des débits d'informations des milliards de fois plus élevés. Aucun obstacle de taille supérieure à quelques décimètres ne doit se trouver sur le trajet du faisceau. Ces ondes se réfléchissent facilement sur des obstacles de quelques mètres de dimension ; ce phénomène est exploité par les radars, y compris ceux utilisés aux bords des routes. C'est grâce aux réflexions sur les bâtiments qu'il est possible d'utiliser un téléphone portable sans être en vue directe de l'antenne du relais, mais les interférences entre ondes réfléchies rendent la communication difficile, obligeant l'utilisateur à changer d'endroit ou à se déplacer de quelques mètres simplement. Sur 10 GHz avec une puissance de quelques watts et des antennes paraboliques de moins d'un mètre de diamètre, il est possible d'effectuer des liaisons à plusieurs centaines de kilomètres de distance en se servant d'une montagne élevée comme réflecteur. Au-dessus de 10 gigahertz, le phénomène de diffusion peut se manifester sur des nuages de pluie, permettant à l'onde d'atteindre des endroits situés au-delà de l'horizon optique.\n\n## Prévisions de propagation :\n\nLe niveau du signal émis par une station d'émission (émetteur et antenne) en un point de l'espace (ou de la surface de la Terre) peut être calculé avec une bonne précision si les principaux facteurs déterminant la transmission sont connus. À titre d'exemple prenons deux cas : liaison en vue directe sur 100 MHz et liaison à grande distance sur 10 MHz utilisant une réflexion sur la couche E. Nous n'effectuerons évidemment pas ici les calculs.\n\n### Liaison directe sur 100 MHz :\n\nOn connaît :\n\n- La puissance de sortie de l'émetteur ;\n- Le diagramme de rayonnement de l'antenne d'émission et en particulier le gain de celle-ci dans la direction qui nous intéresse et sa hauteur par rapport au sol ;\n- Le profil du terrain entre la station d'émission et le point de réception, tenant compte de la rotondité de la Terre ;\n- La distance entre émetteur et point de réception ;\n\nDes logiciels plus ou moins sophistiqués permettent de faire rapidement ce genre de calcul qui peut éventuellement tenir compte de la conductivité du sol, des possibilités de réflexion, etc.\n\nSi on ajoute les caractéristiques de la station de réception (antenne + récepteur), on pourra alors calculer le bilan de la liaison, qui donnera la différence de niveau entre le signal utile et le bruit radioélectrique.\n\n### Liaison utilisant une réflexion sur la couche E :\n\nLes informations nécessaires sont :\n\n- La puissance de l'émetteur ;\n- le diagramme de rayonnement de l'antenne ;\n- la position géographique de chacune des deux stations mais aussi ;\n- la capacité de la couche E à réfléchir les ondes radio.",
        "images": [
            {
                "name": "page_25.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "grandes distances en profitant de la réflexion des ondes métriques sur les traces ionisées par les chutes de météorites et aussi sur les zones ionisées associées aux aurores polaires.",
                "md": "grandes distances en profitant de la réflexion des ondes métriques sur les traces ionisées par les chutes de météorites et aussi sur les zones ionisées associées aux aurores polaires.",
                "bBox": {
                    "x": 70,
                    "y": 82,
                    "w": 456.53,
                    "h": 12
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Ondes décimétriques et hyperfréquences :",
                "md": "## Ondes décimétriques et hyperfréquences :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Plus sa fréquence augmente, plus le comportement d'une onde ressemble à celui d'un rayon lumineux. Les faisceaux hertziens permettent des liaisons à vue, comme le Télégraphe de Chappe, mais par tous les temps et avec des débits d'informations des milliards de fois plus élevés. Aucun obstacle de taille supérieure à quelques décimètres ne doit se trouver sur le trajet du faisceau. Ces ondes se réfléchissent facilement sur des obstacles de quelques mètres de dimension ; ce phénomène est exploité par les radars, y compris ceux utilisés aux bords des routes. C'est grâce aux réflexions sur les bâtiments qu'il est possible d'utiliser un téléphone portable sans être en vue directe de l'antenne du relais, mais les interférences entre ondes réfléchies rendent la communication difficile, obligeant l'utilisateur à changer d'endroit ou à se déplacer de quelques mètres simplement. Sur 10 GHz avec une puissance de quelques watts et des antennes paraboliques de moins d'un mètre de diamètre, il est possible d'effectuer des liaisons à plusieurs centaines de kilomètres de distance en se servant d'une montagne élevée comme réflecteur. Au-dessus de 10 gigahertz, le phénomène de diffusion peut se manifester sur des nuages de pluie, permettant à l'onde d'atteindre des endroits situés au-delà de l'horizon optique.",
                "md": "Plus sa fréquence augmente, plus le comportement d'une onde ressemble à celui d'un rayon lumineux. Les faisceaux hertziens permettent des liaisons à vue, comme le Télégraphe de Chappe, mais par tous les temps et avec des débits d'informations des milliards de fois plus élevés. Aucun obstacle de taille supérieure à quelques décimètres ne doit se trouver sur le trajet du faisceau. Ces ondes se réfléchissent facilement sur des obstacles de quelques mètres de dimension ; ce phénomène est exploité par les radars, y compris ceux utilisés aux bords des routes. C'est grâce aux réflexions sur les bâtiments qu'il est possible d'utiliser un téléphone portable sans être en vue directe de l'antenne du relais, mais les interférences entre ondes réfléchies rendent la communication difficile, obligeant l'utilisateur à changer d'endroit ou à se déplacer de quelques mètres simplement. Sur 10 GHz avec une puissance de quelques watts et des antennes paraboliques de moins d'un mètre de diamètre, il est possible d'effectuer des liaisons à plusieurs centaines de kilomètres de distance en se servant d'une montagne élevée comme réflecteur. Au-dessus de 10 gigahertz, le phénomène de diffusion peut se manifester sur des nuages de pluie, permettant à l'onde d'atteindre des endroits situés au-delà de l'horizon optique.",
                "bBox": {
                    "x": 70,
                    "y": 148,
                    "w": 456.54,
                    "h": 147
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Prévisions de propagation :",
                "md": "## Prévisions de propagation :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Le niveau du signal émis par une station d'émission (émetteur et antenne) en un point de l'espace (ou de la surface de la Terre) peut être calculé avec une bonne précision si les principaux facteurs déterminant la transmission sont connus. À titre d'exemple prenons deux cas : liaison en vue directe sur 100 MHz et liaison à grande distance sur 10 MHz utilisant une réflexion sur la couche E. Nous n'effectuerons évidemment pas ici les calculs.",
                "md": "Le niveau du signal émis par une station d'émission (émetteur et antenne) en un point de l'espace (ou de la surface de la Terre) peut être calculé avec une bonne précision si les principaux facteurs déterminant la transmission sont connus. À titre d'exemple prenons deux cas : liaison en vue directe sur 100 MHz et liaison à grande distance sur 10 MHz utilisant une réflexion sur la couche E. Nous n'effectuerons évidemment pas ici les calculs.",
                "bBox": {
                    "x": 70,
                    "y": 349,
                    "w": 456.55,
                    "h": 52
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Liaison directe sur 100 MHz :",
                "md": "### Liaison directe sur 100 MHz :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "On connaît :\n\n- La puissance de sortie de l'émetteur ;\n- Le diagramme de rayonnement de l'antenne d'émission et en particulier le gain de celle-ci dans la direction qui nous intéresse et sa hauteur par rapport au sol ;\n- Le profil du terrain entre la station d'émission et le point de réception, tenant compte de la rotondité de la Terre ;\n- La distance entre émetteur et point de réception ;\n\nDes logiciels plus ou moins sophistiqués permettent de faire rapidement ce genre de calcul qui peut éventuellement tenir compte de la conductivité du sol, des possibilités de réflexion, etc.\n\nSi on ajoute les caractéristiques de la station de réception (antenne + récepteur), on pourra alors calculer le bilan de la liaison, qui donnera la différence de niveau entre le signal utile et le bruit radioélectrique.",
                "md": "On connaît :\n\n- La puissance de sortie de l'émetteur ;\n- Le diagramme de rayonnement de l'antenne d'émission et en particulier le gain de celle-ci dans la direction qui nous intéresse et sa hauteur par rapport au sol ;\n- Le profil du terrain entre la station d'émission et le point de réception, tenant compte de la rotondité de la Terre ;\n- La distance entre émetteur et point de réception ;\n\nDes logiciels plus ou moins sophistiqués permettent de faire rapidement ce genre de calcul qui peut éventuellement tenir compte de la conductivité du sol, des possibilités de réflexion, etc.\n\nSi on ajoute les caractéristiques de la station de réception (antenne + récepteur), on pourra alors calculer le bilan de la liaison, qui donnera la différence de niveau entre le signal utile et le bruit radioélectrique.",
                "bBox": {
                    "x": 70,
                    "y": 481,
                    "w": 456.53,
                    "h": 130
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Liaison utilisant une réflexion sur la couche E :",
                "md": "### Liaison utilisant une réflexion sur la couche E :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Les informations nécessaires sont :\n\n- La puissance de l'émetteur ;\n- le diagramme de rayonnement de l'antenne ;\n- la position géographique de chacune des deux stations mais aussi ;\n- la capacité de la couche E à réfléchir les ondes radio.",
                "md": "Les informations nécessaires sont :\n\n- La puissance de l'émetteur ;\n- le diagramme de rayonnement de l'antenne ;\n- la position géographique de chacune des deux stations mais aussi ;\n- la capacité de la couche E à réfléchir les ondes radio.",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 26,
        "text": "   C'est le nombre de Wolf (ou Sun Spot Number, en abrégé : « SSN »), mais aussi la date et l'heure du\n   jour de la tentative de liaison qui permettra au logiciel de calculer les possibilités de propagation\n   ionosphérique.  On  connaîtra  la  probabilité  d'établissement  de  la  liaison  en  fonction  de  la\n   fréquence pour un rapport signal sur bruit donné.\n   Propagation guidée :\n   Pour transporter de l'énergie à haute fréquence d'un point à un autre, on n'utilise pas une rallonge\n   électrique ordinaire mais une ligne de transmission aux caractéristiques appropriées. La ligne est\n   composée de deux conducteurs électriques parallèles séparés par un diélectrique, très bon isolant\n   aux fréquences utilisées (air, téflon polyéthylène...). Si l'un des conducteurs est entouré par l'autre,\n   on parle alors de ligne coaxiale\n   Exemples de lignes de transmission :\n•             De l'émetteur à l'antenne on utilisera un câble coaxial pouvant supporter des tensions de\n   plusieurs centaines ou milliers de volts sans claquage électrique.\n•             Entre l'antenne parabolique et le récepteur de télévision par satellite les signaux de faible\n   amplitude  seront  transportés  par  un  câble  coaxial  présentant  de  faibles  pertes  à  très  haute\n   fréquence.\n•             L'antenne  d'un  radar  utilisé  pour  le  contrôle  aérien  est  reliée  aux  équipements  de\n   détection  à  l'aide  d'un  guide  d'onde,  sorte  de  tuyau  métallique  à  l'intérieur  duquel  se  déplace\n   l'onde.\n•             Sur  ondes  courtes  les  radioamateurs  utilisent  parfois  des  lignes  bifilaires  pour  alimenter\n   leur antenne.\n•             Les  circuits  sélectifs  utilisés  dans  les  appareils  fonctionnant  à  très  haute  fréquence\n   (supérieure à 300 MHz) sont très souvent des lignes.\n   Formation d'une onde dans une ligne :\n   Un  générateur  relié  à  une  charge  à  l'aide  d'une  ligne  va  provoquer  dans  chacun  des  deux\n   conducteurs  de  la  ligne  l'établissement  d'un  courant  électrique  et  la  formation  d'une  onde  se\n   déplaçant dans le diélectrique à une vitesse très grande. Cette vitesse est inférieure à la célérité de\n   la  lumière  mais  dépasse  fréquemment  200  000  km/s,  ce  qui  implique  que, pour  une  fréquence\n   donnée, la longueur de l'onde dans la ligne est plus petite que dans l'espace.\n   (longueur d'onde = célérité dans le milieu / fréquence )\n   Ondes progressives :\n   Lorsque la ligne est parfaitement adaptée au générateur et à la charge, condition remplie lorsque\n   l'impédance de sortie du premier et l'impédance d'entrée de la deuxième sont égales à l'impédance\n   caractéristique  de  la  ligne,  cette  dernière  est  parcourue  seulement  par  des  ondes  progressives.\n   Dans ce cas idéal la différence de potentiel entre les conducteurs et le courant qui circule dans\n   ceux-ci ont la même valeur quelque soit l'endroit où la mesure est effectuée sur la ligne. Une telle\n   ligne  ne  rayonne  pas,  le  champ  électromagnétique  produit  par  l'onde  progressive  n'est  pas\n   décelable à quelque distance de la ligne.\n   Ondes stationnaires :\n   Si la condition évoquée précédemment n'est pas remplie, ce qui arrive si l'impédance de la charge\n   est  différente  de  l'impédance  caractéristique  de  la  ligne,  la  ligne  va  alors  être  le  siège  d'ondes\n   stationnaires. La tension mesurable entre les deux fils ne sera plus constante sur toute la longueur\n   de la ligne et vont apparaître :\n\n\n\n                                                                      26",
        "md": "C'est le nombre de Wolf (ou Sun Spot Number, en abrégé : « SSN »), mais aussi la date et l'heure du jour de la tentative de liaison qui permettra au logiciel de calculer les possibilités de propagation ionosphérique. On connaîtra la probabilité d'établissement de la liaison en fonction de la fréquence pour un rapport signal sur bruit donné.\n\n## Propagation guidée :\n\nPour transporter de l'énergie à haute fréquence d'un point à un autre, on n'utilise pas une rallonge électrique ordinaire mais une ligne de transmission aux caractéristiques appropriées. La ligne est composée de deux conducteurs électriques parallèles séparés par un diélectrique, très bon isolant aux fréquences utilisées (air, téflon polyéthylène...). Si l'un des conducteurs est entouré par l'autre, on parle alors de ligne coaxiale\n\n### Exemples de lignes de transmission :\n\n- De l'émetteur à l'antenne on utilisera un câble coaxial pouvant supporter des tensions de plusieurs centaines ou milliers de volts sans claquage électrique.\n\n- Entre l'antenne parabolique et le récepteur de télévision par satellite les signaux de faible amplitude seront transportés par un câble coaxial présentant de faibles pertes à très haute fréquence.\n\n- L'antenne d'un radar utilisé pour le contrôle aérien est reliée aux équipements de détection à l'aide d'un guide d'onde, sorte de tuyau métallique à l'intérieur duquel se déplace l'onde.\n\n- Sur ondes courtes les radioamateurs utilisent parfois des lignes bifilaires pour alimenter leur antenne.\n\n- Les circuits sélectifs utilisés dans les appareils fonctionnant à très haute fréquence (supérieure à 300 MHz) sont très souvent des lignes.\n\n## Formation d'une onde dans une ligne :\n\nUn générateur relié à une charge à l'aide d'une ligne va provoquer dans chacun des deux conducteurs de la ligne l'établissement d'un courant électrique et la formation d'une onde se déplaçant dans le diélectrique à une vitesse très grande. Cette vitesse est inférieure à la célérité de la lumière mais dépasse fréquemment 200 000 km/s, ce qui implique que, pour une fréquence donnée, la longueur de l'onde dans la ligne est plus petite que dans l'espace.\n\n(longueur d'onde = célérité dans le milieu / fréquence )\n\n## Ondes progressives :\n\nLorsque la ligne est parfaitement adaptée au générateur et à la charge, condition remplie lorsque l'impédance de sortie du premier et l'impédance d'entrée de la deuxième sont égales à l'impédance caractéristique de la ligne, cette dernière est parcourue seulement par des ondes progressives. Dans ce cas idéal la différence de potentiel entre les conducteurs et le courant qui circule dans ceux-ci ont la même valeur quelque soit l'endroit où la mesure est effectuée sur la ligne. Une telle ligne ne rayonne pas, le champ électromagnétique produit par l'onde progressive n'est pas décelable à quelque distance de la ligne.\n\n## Ondes stationnaires :\n\nSi la condition évoquée précédemment n'est pas remplie, ce qui arrive si l'impédance de la charge est différente de l'impédance caractéristique de la ligne, la ligne va alors être le siège d'ondes stationnaires. La tension mesurable entre les deux fils ne sera plus constante sur toute la longueur de la ligne et vont apparaître :",
        "images": [
            {
                "name": "page_26.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "C'est le nombre de Wolf (ou Sun Spot Number, en abrégé : « SSN »), mais aussi la date et l'heure du jour de la tentative de liaison qui permettra au logiciel de calculer les possibilités de propagation ionosphérique. On connaîtra la probabilité d'établissement de la liaison en fonction de la fréquence pour un rapport signal sur bruit donné.",
                "md": "C'est le nombre de Wolf (ou Sun Spot Number, en abrégé : « SSN »), mais aussi la date et l'heure du jour de la tentative de liaison qui permettra au logiciel de calculer les possibilités de propagation ionosphérique. On connaîtra la probabilité d'établissement de la liaison en fonction de la fréquence pour un rapport signal sur bruit donné.",
                "bBox": {
                    "x": 70,
                    "y": 82,
                    "w": 457.16,
                    "h": 25
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Propagation guidée :",
                "md": "## Propagation guidée :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Pour transporter de l'énergie à haute fréquence d'un point à un autre, on n'utilise pas une rallonge électrique ordinaire mais une ligne de transmission aux caractéristiques appropriées. La ligne est composée de deux conducteurs électriques parallèles séparés par un diélectrique, très bon isolant aux fréquences utilisées (air, téflon polyéthylène...). Si l'un des conducteurs est entouré par l'autre, on parle alors de ligne coaxiale",
                "md": "Pour transporter de l'énergie à haute fréquence d'un point à un autre, on n'utilise pas une rallonge électrique ordinaire mais une ligne de transmission aux caractéristiques appropriées. La ligne est composée de deux conducteurs électriques parallèles séparés par un diélectrique, très bon isolant aux fréquences utilisées (air, téflon polyéthylène...). Si l'un des conducteurs est entouré par l'autre, on parle alors de ligne coaxiale",
                "bBox": {
                    "x": 70,
                    "y": 161,
                    "w": 456.51,
                    "h": 53
                }
            },
            {
                "type": "heading",
                "lvl": 3,
                "value": "Exemples de lignes de transmission :",
                "md": "### Exemples de lignes de transmission :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "- De l'émetteur à l'antenne on utilisera un câble coaxial pouvant supporter des tensions de plusieurs centaines ou milliers de volts sans claquage électrique.\n\n- Entre l'antenne parabolique et le récepteur de télévision par satellite les signaux de faible amplitude seront transportés par un câble coaxial présentant de faibles pertes à très haute fréquence.\n\n- L'antenne d'un radar utilisé pour le contrôle aérien est reliée aux équipements de détection à l'aide d'un guide d'onde, sorte de tuyau métallique à l'intérieur duquel se déplace l'onde.\n\n- Sur ondes courtes les radioamateurs utilisent parfois des lignes bifilaires pour alimenter leur antenne.\n\n- Les circuits sélectifs utilisés dans les appareils fonctionnant à très haute fréquence (supérieure à 300 MHz) sont très souvent des lignes.",
                "md": "- De l'émetteur à l'antenne on utilisera un câble coaxial pouvant supporter des tensions de plusieurs centaines ou milliers de volts sans claquage électrique.\n\n- Entre l'antenne parabolique et le récepteur de télévision par satellite les signaux de faible amplitude seront transportés par un câble coaxial présentant de faibles pertes à très haute fréquence.\n\n- L'antenne d'un radar utilisé pour le contrôle aérien est reliée aux équipements de détection à l'aide d'un guide d'onde, sorte de tuyau métallique à l'intérieur duquel se déplace l'onde.\n\n- Sur ondes courtes les radioamateurs utilisent parfois des lignes bifilaires pour alimenter leur antenne.\n\n- Les circuits sélectifs utilisés dans les appareils fonctionnant à très haute fréquence (supérieure à 300 MHz) sont très souvent des lignes.",
                "bBox": {
                    "x": 106,
                    "y": 254,
                    "w": 420.5,
                    "h": 45
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Formation d'une onde dans une ligne :",
                "md": "## Formation d'une onde dans une ligne :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Un générateur relié à une charge à l'aide d'une ligne va provoquer dans chacun des deux conducteurs de la ligne l'établissement d'un courant électrique et la formation d'une onde se déplaçant dans le diélectrique à une vitesse très grande. Cette vitesse est inférieure à la célérité de la lumière mais dépasse fréquemment 200 000 km/s, ce qui implique que, pour une fréquence donnée, la longueur de l'onde dans la ligne est plus petite que dans l'espace.\n\n(longueur d'onde = célérité dans le milieu / fréquence )",
                "md": "Un générateur relié à une charge à l'aide d'une ligne va provoquer dans chacun des deux conducteurs de la ligne l'établissement d'un courant électrique et la formation d'une onde se déplaçant dans le diélectrique à une vitesse très grande. Cette vitesse est inférieure à la célérité de la lumière mais dépasse fréquemment 200 000 km/s, ce qui implique que, pour une fréquence donnée, la longueur de l'onde dans la ligne est plus petite que dans l'espace.\n\n(longueur d'onde = célérité dans le milieu / fréquence )",
                "bBox": {
                    "x": 70,
                    "y": 493,
                    "w": 456.48,
                    "h": 12
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Ondes progressives :",
                "md": "## Ondes progressives :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Lorsque la ligne est parfaitement adaptée au générateur et à la charge, condition remplie lorsque l'impédance de sortie du premier et l'impédance d'entrée de la deuxième sont égales à l'impédance caractéristique de la ligne, cette dernière est parcourue seulement par des ondes progressives. Dans ce cas idéal la différence de potentiel entre les conducteurs et le courant qui circule dans ceux-ci ont la même valeur quelque soit l'endroit où la mesure est effectuée sur la ligne. Une telle ligne ne rayonne pas, le champ électromagnétique produit par l'onde progressive n'est pas décelable à quelque distance de la ligne.",
                "md": "Lorsque la ligne est parfaitement adaptée au générateur et à la charge, condition remplie lorsque l'impédance de sortie du premier et l'impédance d'entrée de la deuxième sont égales à l'impédance caractéristique de la ligne, cette dernière est parcourue seulement par des ondes progressives. Dans ce cas idéal la différence de potentiel entre les conducteurs et le courant qui circule dans ceux-ci ont la même valeur quelque soit l'endroit où la mesure est effectuée sur la ligne. Une telle ligne ne rayonne pas, le champ électromagnétique produit par l'onde progressive n'est pas décelable à quelque distance de la ligne.",
                "bBox": {
                    "x": 70,
                    "y": 578,
                    "w": 456.57,
                    "h": 66
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Ondes stationnaires :",
                "md": "## Ondes stationnaires :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "Si la condition évoquée précédemment n'est pas remplie, ce qui arrive si l'impédance de la charge est différente de l'impédance caractéristique de la ligne, la ligne va alors être le siège d'ondes stationnaires. La tension mesurable entre les deux fils ne sera plus constante sur toute la longueur de la ligne et vont apparaître :",
                "md": "Si la condition évoquée précédemment n'est pas remplie, ce qui arrive si l'impédance de la charge est différente de l'impédance caractéristique de la ligne, la ligne va alors être le siège d'ondes stationnaires. La tension mesurable entre les deux fils ne sera plus constante sur toute la longueur de la ligne et vont apparaître :",
                "bBox": {
                    "x": 70,
                    "y": 698,
                    "w": 456.52,
                    "h": 39
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    },
    {
        "page": 27,
        "text": "•            des  maxima  de  tension  encore  appelés  ventres  de  tension  correspondants  à  des  nœuds  de\n   courant\n•            des  minima  de  tension  ou  nœuds  de  tension  associés  à  des  maxima  de  courant  (ventres  de\n   courant).\n   Ce type de fonctionnement est généralement redouté si le taux d'ondes stationnaires (TOS) est élevé.\n   Les surtensions correspondant aux ventres de tension peuvent endommager l'émetteur, voire la\n   ligne. Les pertes par réflexion sur la charge sont élevées.\n   Pertes dans la ligne :\n   La résistance électrique (non nulle) des conducteurs constituant la ligne et l'isolement (non infini)\n   du diélectrique, provoquent un affaiblissement de l'amplitude de l'onde progressive parcourant la\n   ligne.\n   Ces pertes ont un double inconvénient :\n•            affaiblissement du signal reçu et diminution de la sensibilité du système de réception.\n•            réduction de la puissance transmise à l'antenne par l'émetteur.\n   Les pertes en ligne s'expriment en dB/m (décibel/mètre de longueur) et dépendent de nombreux\n   facteurs :\n•            nature du diélectrique (matière, forme...)\n•            type de ligne (bifilaire ou coaxiale)\n•            fréquence de travail\n   Exemple : un câble coaxial très commun (ref. RG58A) d'une longueur de 30 mètres présente 6dB\n   de pertes à 130MHz.A cette fréquence, si l'on applique une puissance de 100 watts à l'entrée de\n   cette ligne on ne retrouvera que 25 watts à son extrémité, avec une perte de 6dB. À la fréquence\n   de 6MHz on retrouvera 95 watts et la perte n'est plus que de 1 décibel.\n\n\n\n\n\n\n\n\n                                                                    27",
        "md": "- des maxima de tension encore appelés *ventres de tension* correspondants à des *nœuds de courant*\n\n- des minima de tension ou *nœuds de tension* associés à des maxima de courant (*ventres de courant*).\n\nCe type de fonctionnement est généralement redouté si le *taux d'ondes stationnaires* (TOS) est élevé. Les surtensions correspondant aux ventres de tension peuvent endommager l'émetteur, voire la ligne. Les pertes par réflexion sur la charge sont élevées.\n\n## Pertes dans la ligne :\n\nLa résistance électrique (non nulle) des conducteurs constituant la ligne et l'isolement (non infini) du diélectrique, provoquent un affaiblissement de l'amplitude de l'onde progressive parcourant la ligne.\n\nCes pertes ont un double inconvénient :\n\n- affaiblissement du signal reçu et diminution de la sensibilité du système de réception.\n- réduction de la puissance transmise à l'antenne par l'émetteur.\n\nLes pertes en ligne s'expriment en dB/m (décibel/mètre de longueur) et dépendent de nombreux facteurs :\n\n- nature du diélectrique (matière, forme...)\n- type de ligne (bifilaire ou coaxiale)\n- fréquence de travail\n\nExemple : un câble coaxial très commun (ref. RG58A) d'une longueur de 30 mètres présente 6dB de pertes à 130MHz. À cette fréquence, si l'on applique une puissance de 100 watts à l'entrée de cette ligne on ne retrouvera que 25 watts à son extrémité, avec une perte de 6dB. À la fréquence de 6MHz on retrouvera 95 watts et la perte n'est plus que de 1 décibel.",
        "images": [
            {
                "name": "page_27.jpg",
                "height": 842,
                "width": 595,
                "x": 0,
                "y": 0,
                "type": "full_page_screenshot"
            }
        ],
        "items": [
            {
                "type": "text",
                "value": "- des maxima de tension encore appelés *ventres de tension* correspondants à des *nœuds de courant*\n\n- des minima de tension ou *nœuds de tension* associés à des maxima de courant (*ventres de courant*).\n\nCe type de fonctionnement est généralement redouté si le *taux d'ondes stationnaires* (TOS) est élevé. Les surtensions correspondant aux ventres de tension peuvent endommager l'émetteur, voire la ligne. Les pertes par réflexion sur la charge sont élevées.",
                "md": "- des maxima de tension encore appelés *ventres de tension* correspondants à des *nœuds de courant*\n\n- des minima de tension ou *nœuds de tension* associés à des maxima de courant (*ventres de courant*).\n\nCe type de fonctionnement est généralement redouté si le *taux d'ondes stationnaires* (TOS) est élevé. Les surtensions correspondant aux ventres de tension peuvent endommager l'émetteur, voire la ligne. Les pertes par réflexion sur la charge sont élevées.",
                "bBox": {
                    "x": 70,
                    "y": 161,
                    "w": 456.52,
                    "h": 92
                }
            },
            {
                "type": "heading",
                "lvl": 2,
                "value": "Pertes dans la ligne :",
                "md": "## Pertes dans la ligne :",
                "bBox": {
                    "x": 0,
                    "y": 0,
                    "w": 595,
                    "h": 842
                }
            },
            {
                "type": "text",
                "value": "La résistance électrique (non nulle) des conducteurs constituant la ligne et l'isolement (non infini) du diélectrique, provoquent un affaiblissement de l'amplitude de l'onde progressive parcourant la ligne.\n\nCes pertes ont un double inconvénient :\n\n- affaiblissement du signal reçu et diminution de la sensibilité du système de réception.\n- réduction de la puissance transmise à l'antenne par l'émetteur.\n\nLes pertes en ligne s'expriment en dB/m (décibel/mètre de longueur) et dépendent de nombreux facteurs :\n\n- nature du diélectrique (matière, forme...)\n- type de ligne (bifilaire ou coaxiale)\n- fréquence de travail\n\nExemple : un câble coaxial très commun (ref. RG58A) d'une longueur de 30 mètres présente 6dB de pertes à 130MHz. À cette fréquence, si l'on applique une puissance de 100 watts à l'entrée de cette ligne on ne retrouvera que 25 watts à son extrémité, avec une perte de 6dB. À la fréquence de 6MHz on retrouvera 95 watts et la perte n'est plus que de 1 décibel.",
                "md": "La résistance électrique (non nulle) des conducteurs constituant la ligne et l'isolement (non infini) du diélectrique, provoquent un affaiblissement de l'amplitude de l'onde progressive parcourant la ligne.\n\nCes pertes ont un double inconvénient :\n\n- affaiblissement du signal reçu et diminution de la sensibilité du système de réception.\n- réduction de la puissance transmise à l'antenne par l'émetteur.\n\nLes pertes en ligne s'expriment en dB/m (décibel/mètre de longueur) et dépendent de nombreux facteurs :\n\n- nature du diélectrique (matière, forme...)\n- type de ligne (bifilaire ou coaxiale)\n- fréquence de travail\n\nExemple : un câble coaxial très commun (ref. RG58A) d'une longueur de 30 mètres présente 6dB de pertes à 130MHz. À cette fréquence, si l'on applique une puissance de 100 watts à l'entrée de cette ligne on ne retrouvera que 25 watts à son extrémité, avec une perte de 6dB. À la fréquence de 6MHz on retrouvera 95 watts et la perte n'est plus que de 1 décibel.",
                "bBox": {
                    "x": 70,
                    "y": 214,
                    "w": 456.55,
                    "h": 235
                }
            }
        ],
        "status": "OK",
        "links": [],
        "width": 595,
        "height": 842,
        "triggeredAutoMode": false
    }
]
