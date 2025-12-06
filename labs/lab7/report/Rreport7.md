---
# Front matter
lang: ru-RU
title: "Лабораторная работа №7"
subtitle: "Практикум по научному письму"
author: "Савченко Елизавета Николаевна"

## Generic otions
lang: ru-RU
toc-title: "Содержание"

## Bibliography
bibliography: cite.bib
csl: pandoc/csl/gost-r-7-0-5-2008-numeric.csl

## Pdf output format
fontsize: 12pt
linestretch: 1.5
papersize: a4
documentclass: scrreprt
## I18n polyglossia
polyglossia-lang:
  name: russian
  options:
	- spelling=modern
	- babelshorthands=true
polyglossia-otherlangs:
  name: english
## I18n babel
babel-lang: russian
babel-otherlangs: english
## Fonts
mainfont: IBM Plex Serif
romanfont: IBM Plex Serif
sansfont: IBM Plex Sans
monofont: IBM Plex Mono
mathfont: STIX Two Math
mainfontoptions: Ligatures=Common,Ligatures=TeX,Scale=0.94
romanfontoptions: Ligatures=Common,Ligatures=TeX,Scale=0.94
sansfontoptions: Ligatures=Common,Ligatures=TeX,Scale=MatchLowercase,Scale=0.94
monofontoptions: Scale=MatchLowercase,Scale=0.94,FakeStretch=0.9
mathfontoptions:
## Biblatex
biblatex: true
biblio-style: "gost-numeric"
biblatexoptions:
  - parentracker=true
  - backend=biber
  - hyperref=auto
  - language=auto
  - autolang=other*
  - citestyle=gost-numeric
## Pandoc-crossref LaTeX customization
figureTitle: "Рис."
listingTitle: "Листинг"
lofTitle: "Список иллюстраций"
lolTitle: "Листинги"
## Misc options
indent: true
header-includes:
  - \usepackage{indentfirst}
  - \usepackage{float} # keep figures where there are in the text
  - \floatplacement{figure}{H} # keep figures where there are in the text
---

# Цель работы

Познакомиться с языком LaTeX, продолжить изучение его возможностей. 

# Задание

1. Запустить несколько различных программ, изучить новый пакет для работы с презентациями и новые команды языка.


# Выполнение лабораторной работы

 
В LaTeX можно создавать презентации с помощью класса документа beamer. Чтобы создать слайды, можно использовать среду frame с заголовком слайда в качестве единственного аргумента. (рис. [-@fig:001] ) 

![71.jpg](../../../../../Documents/GitHub/2026-1--study-practical-scientific-writing/labs/lab7/report/image/71.jpg)
 
Упорядочим информацию в презентации. (рис. [-@fig:002] ) 

![72.jpg](../../../../../Documents/GitHub/2026-1--study-practical-scientific-writing/labs/lab7/report/image/72.jpg)

Чтобы элементы слайда появлялись один за другим, используем pause.  (рис. [-@fig:003] ) 


Мы так же можем использовать это в перечислении (рис. [-@fig:004] ) 

![73.jpg](../../../../../Documents/GitHub/2026-1--study-practical-scientific-writing/labs/lab7/report/image/73.jpg)

С помощью команды uncover можно точно определить, когда будет отображаться каждая часть слайда. Эта команда более гибкая, чем команда pause. Ниже приведен пример использования команды uncover (рис. [-@fig:005] )

Продемонстрируем один из способов переноса общей структуры плаката в LaTeX. (рис. [-@fig:006] ) 

![74.jpg](../../../../../Documents/GitHub/2026-1--study-practical-scientific-writing/labs/lab7/report/image/74.jpg)

Программы работают верно. 

# Выводы

Познакомился с языком LaTeX, продолжил изучение его возможностей.

# Список литературы

Лабораторная работа №7
Практикум по научному письму [Электронный ресурс]. URL: https://esystem.rudn.ru/pluginfile.php/2862317/mod_folder/content/0/Practical-scientific-writing.pdf

