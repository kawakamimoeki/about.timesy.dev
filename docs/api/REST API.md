---
sidebar_position: 1
---

Timesyでは、REST APIを提供しています。

### 認証
設定画面からアクセストークンを生成して、リクエストヘッダーに`Authorization: Bearer {アクセストークン}`を付与してください。
アクセストークンは再生成することができます。

```bash
curl -X POST \
  -H "Authorization: Bearer {アクセストークン}" \
  -H "Content-Type: application/json" \
  -d '{ "body": "test" }' \
  https://www.timesy.dev/api/v1/posts
```

### 投稿
#### 投稿する
##### 本文のパラメーター

- `body` - 本文

##### 例

```bash
curl -X POST \
  -H "Authorization: Bearer {アクセストークン}" \
  -H "Content-Type: application/json" \
  -d '{ "body": "test" }' \
  https://www.timesy.dev/api/v1/posts
```

### 投稿を更新する
#### パスパラメーター

- `id` - 投稿ID

#### 本文のパラメーター

- `body` - 本文

##### 例

```bash
curl -X PATCH \
  -H "Authorization: Bearer {アクセストークン}" \
  -H "Content-Type: application/json" \
  -d '{ "body": "test" }' \
  https://www.timesy.dev/api/v1/posts/{id}
```

### 投稿を削除する
#### パスパラメーター

- `id` - 投稿ID

##### 例

```bash
curl -X DELETE \
  -H "Authorization: Bearer {アクセストークン}" \
  https://www.timesy.dev/api/v1/posts/{id}
```

### コメント
#### コメントする
##### パスパラメーター

- `postId` - 投稿ID

##### 本文のパラメーター

- `body` - 本文

##### 例

```bash
curl -X POST \
  -H "Authorization: Bearer {アクセストークン}" \
  -H "Content-Type: application/json" \
  -d '{ "body": "test" }' \
  https://www.timesy.dev/api/v1/posts/{postId}/comments
```

### コメントを更新する
#### パスパラメーター

- `postId` - 投稿ID
- `id` - コメントID

#### 本文のパラメーター

- `body` - 本文

##### 例

```bash
curl -X PATCH \
  -H "Authorization: Bearer {アクセストークン}" \
  -H "Content-Type: application/json" \
  -d '{ "body": "test" }' \
  https://www.timesy.dev/api/v1/posts/{postId}/comments/{id}
```

### コメントを削除する
#### パスパラメーター

- `postId` - 投稿ID
- `id` - コメントID

##### 例

```bash
curl -X DELETE \
  -H "Authorization: Bearer {アクセストークン}" \
  https://www.timesy.dev/api/v1/posts/{postId}/comments/{id}
```

### プロジェクト
#### 作成する
##### 本文のパラメーター

- `title` - プロジェクト名
- `codename` - プロジェクトタグ
- `link` - プロジェクトのリンク
- `body` - 本文

##### 例

```bash
curl -X POST \
  -H "Authorization: Bearer {アクセストークン}" \
  -H "Content-Type: application/json" \
  -d '{ "title": "test", codename: "test", "link": "https://example.com", body: "Hello!" }' \
  https://www.timesy.dev/api/v1/posts
```

### 更新する
#### パスパラメーター

- `id` - プロジェクトID

#### 本文のパラメーター

- `title` - プロジェクト名
- `codename` - プロジェクトタグ
- `link` - プロジェクトのリンク
- `body` - 本文

##### 例

```bash
curl -X PATCH \
  -H "Authorization: Bearer {アクセストークン}" \
  -H "Content-Type: application/json" \
  -d '{ "body": "test" }' \
  https://www.timesy.dev/api/v1/projects/{id}
```

### 投稿を削除する
#### パスパラメーター

- `id` - プロジェクトID

##### 例

```bash
curl -X DELETE \
  -H "Authorization: Bearer {アクセストークン}" \
  https://www.timesy.dev/api/v1/projects/{id}
```
