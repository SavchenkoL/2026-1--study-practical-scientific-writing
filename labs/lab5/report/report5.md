---
## Front matter
title: "Отчёт по лабораторной работе №5"
subtitle: "Дисциплина: Computer Skills for Scientific Writing"
author: "Савченко Елизавета Николаевна"

## Generic otions
lang: ru-RU
toc-title: "Содержание"

## Bibliography
bibliography: bib/cite.bib
csl: pandoc/csl/gost-r-7-0-5-2008-numeric.csl

## Pdf output format
toc: true # Table of contents
toc-depth: 2
lof: true # List of figures
lot: false # List of tables
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
tableTitle: "Таблица"
listingTitle: "Листинг"
lofTitle: "Список иллюстраций"
lotTitle: "Список таблиц"
lolTitle: "Листинги"
## Misc options
indent: true
header-includes:
  - \usepackage{indentfirst}
  - \usepackage{float} # keep figures where there are in the text
  - \floatplacement{figure}{H} # keep figures where there are in the text
---

# Общая информация о задании лабораторной работы

## Цель работы

Научиться создавать и оформлять таблицы, контролировать выравнивание столбцов и использовать объединение нескольких столбцов для улучшения визуального представления данных.

## Задание

- Использовать простой пример таблицы, чтобы начать экспериментировать с таблицами.
- Попробовать разные выравнивания столбцов с помощью типов l (влево), c (по центру) и r (вправо).
- Что происходит, если в строке таблицы слишком мало элементов?
- А если слишком много?
- Поэкспериментируйте с командой \multicolumn, чтобы объединять несколько столбцов.

## Теоретическая часть


# Выполнение лабораторной работы 

## Код программы.

    \documentclass{article}
    \usepackage[T2A]{fontenc}
    \usepackage[utf8]{inputenc}
    \usepackage[russian]{babel}
    
    \begin{document}
    
    % Простая таблица 3 столбца, выравнивание слева, по центру, справа
    \begin{tabular}{lcr}
      Левый & Центр & Правый \\
      1 & 2 & 3 \\
      a & b & c \\
    \end{tabular}
    
    \vspace{10pt}
    
    % Если слишком мало элементов в строке (2 вместо 3) — LaTeX игнорирует недостающие, вывод будет неполным
    \begin{tabular}{lcr}
      1 & 2 \\ % третий элемент отсутствует, колонка становится пустой
      a & b & c \\
    \end{tabular}
    
    \vspace{10pt}
    
    % Если слишком много элементов в строке (4 вместо 3) — LaTeX выдаст ошибку "Extra alignment tab has been changed to \cr"
    % Чтобы это исправить, нужно поправить количество колонок или использовать multicolumn
    
    \vspace{10pt}
    
    % Пример команды \multicolumn — объединяем 2 столбца в одну ячейку, выравнивание по центру, обрамление линиями
    \begin{tabular}{|l|c|r|}
      \hline
      Первый & \multicolumn{2}{c|}{Объединённые два столбца} \\
      \hline
      a & b & c \\
      1 & 2 & 3 \\
      \hline
    \end{tabular}
    
    \end{document}

## Ответ программы

![51.jpg](image/51.jpg)

# Выводы

Эксперименты показали, что разные типы выравнивания влияют на внешний вид таблицы. При недостатке элементов в строке таблица может выглядеть неполной, а при избытке — нарушается структура и оформление. Использование команды \multicolumn позволяет объединять несколько ячеек по горизонтали, что помогает создавать более сложные и аккуратные таблицы.