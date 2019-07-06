Нужно разработать приложение, с помощью которого по имени юзера в Github можно получить данные по его репозиториям.

На странице будут:

- инпут для ввода имени юзера
- кнопка "Get repositories"
- список репозиториев

Каждый элемент списка репозиториев представляет из себя:

- ссылка на репозиторий (текст ссылки -- название репозитория)
- описание репозитория

Обработку клика на кнопку "Get repositories" нужно реализовать следующим образом:

- Если репозитории существуют, то вывести на экран список этих репозиториев.
- Если по тем или иным причинам загрузить список не удалось, то нужно вызвать alert с текстом ошибки (текст можете придумать сами)

Если в урле будет параметр `username` (например `codesandbox.io/?username=<some username>`), то во время старта приложения:

1.  В инпуте должно быть значение из параметра `username`
2.  загрузить список репозиториев (сделать так же, как и в случае клика по кнопке "Get repositories")

P.S. Вы можете использовать готовую верстку и стили, которые я оставил здесь, либо сделать это самостоятельно

```html
<div class="repos-container">
  <input type="text" />
  <button>Get repos</button>
  <div class="repos-list">
    <div className="repo-row">
      <div className="repo-name">
        <a href="first/link/to/github/repo">GitHub Repo 1</a>
      </div>
      <div className="repo-description">It is some first repo</div>
    </div>
    <div className="repo-row">
      <div className="repo-name">
        <a href="second/link/to/github/repo">GitHub Repo 2</a>
      </div>
      <div className="repo-description">It is some second repo</div>
    </div>
  </div>
</div>
```
