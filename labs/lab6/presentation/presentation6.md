***Савченко Елизавета Николаевна, НПИмд-01-24, 1132249569***
**Российский университет дружбы народов, Москва, Россия**

8 ноября 2025

# Общая информация о лабораторной работе

## Теоретическая часть
Изучение основ форматирования текста в LaTeX, включая работу с пробелами, абзацами, специальными символами


## Задание

1. Создание базового документа

- Создать документ с различными типами абзацев
- исследовать автоматическое форматирование абзацев в LaTeX

2. Работа с пробелами

- Обычные пробелы latex
Это    предложение    с    множественными    пробелами
Результат: LaTeX автоматически преобразует множественные пробелы в один.

- Жёсткие пробелы (Non-breaking spaces)
latex
Глава~1, Раздел~2, Рисунок~3, г.~Москва
Результат: Слова не разрываются при переносе строки.

- Неразрывные дефисы
latex
10--20~лет, Москва--Санкт-Петербург

3. Специальные символы и форматирование

- Экранирование специальных символов
latex
\# \$ \% \& \{ \} \_ \textbackslash

- Форматирование текста

Жирный текст: \textbf{...}
Курсив: \textit{...}
Моноширинный: \texttt{...}
Малые прописные: \textsc{...}

- Размеры шрифта

latex
{\tiny текст} {\small текст} {\large текст} {\huge текст}

4. Эксперименты с пробелами

Горизонтальные пробелы

latex
Слово1 \hspace{2cm} Слово2
Слово3 \hfill Слово4
Вертикальные пробелы

latex
Текст перед пробелом
\vspace{1cm}
Текст после пробела

5. Межстрочный интервал

Использование пакета setspace:



# Выполнение лабораторной работы 

## Код программы.

    \documentclass{article}
    \usepackage[backend=biber,style=numeric]{biblatex}
    \addbibresource{references.bib}
    
    \begin{document}
    
    \section*{biblatex Numeric Style Test}
    
    This is a test document using biblatex with numeric citations.
    
    \subsection*{Existing Citations}
    Here are some citations that exist in the database: 
    A foundational paper by \textcite{lamport94} and another study \parencite{knuth84}.
    
    Multiple citations in one command: \parencite{lamport94,knuth84,dirac58}.
    
    \subsection*{Non-existent Citation}
    Now let's cite something not in the database: \parencite{nonexistent2024}.
    
    \subsection*{New Database Entry}
    Here's a citation to a newly added entry: \parencite{newman2023}.
    
    \printbibliography
    \end{document}
    
## Ответ программы

![6.png](image/6.png)


# Выводы

1. LaTeX автоматически обрабатывает пробелы и форматирование текста 
2. Жёсткие пробелы необходимы для предотвращения нежелательных разрывов строк 
3. Специальные символы требуют экранирования 
4. Редакторы предоставляют удобные инструменты для работы с кодом и просмотра результата 
5. Система LaTeX обеспечивает профессиональное оформление документов при минимальных усилиях