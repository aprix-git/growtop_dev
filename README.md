### Версии ПО окружения на котором тестируется и собирается проект:
php-cli: 7.4.12 
NodeJS: 18.12.1  
yarn: 1.22.21  
dart sass: 1.57.1
### Запуск и сборка
В директории /assets/source/ необходимо последовательно выполнить две команды:
```bash
yarn install
yarn watch
```
Стили собираются отдельно. Для отслеживания изменений и сборки итогового файла в директории /assets/css нужно запустить:
```bash
sass ./custom.scss ./custom.css --watch
```
### Шаблоны
Итоговая вертстка будет интегрироваться с 1С-Битрикс в стандартную конфигурацию шаблонов (не SPA).

На данный момент в dev версии верстки некоторые части макета вынесены в отдельные шаблоны.  
Их можно найти в директории templates. Например: шапка сайта подвал и хлебные крошки.  
Остальные страницы уже готовой верстки можно найти в папке pages. 
