# 에오르제아의 용사들

톤베리 자유부대 `<에용>` 소개 및 사진 갤러리 사이트입니다. SvelteKit, Svelte 5,
Tailwind CSS 4, Flowbite Svelte로 구성되어 있으며 Cloudflare 배포를 사용합니다.

## 로컬 개발 환경

- Node.js 22.12 이상
- pnpm 11 이상

`nvm`을 사용한다면 프로젝트에 지정된 Node 버전을 다음처럼 준비할 수 있습니다.

```sh
nvm install
nvm use
corepack enable
corepack prepare pnpm@11.9.0 --activate
```

의존성을 설치하고 개발 서버를 실행합니다.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

브라우저에서 `http://localhost:5173`을 엽니다. 같은 네트워크의 다른 기기에서도
확인하려면 `pnpm dev:host`를 사용합니다.

## 검사와 빌드

```sh
# Svelte 및 TypeScript 정적 검사
pnpm check

# 프로덕션 빌드
pnpm build

# 위 두 작업을 순서대로 실행
pnpm test

# 빌드 결과 미리보기
pnpm preview
```

## Discord 갤러리 연동

연동 없이도 `static/images/gallery`의 로컬 사진으로 실행할 수 있습니다. Discord
채널 사진을 함께 표시하려면 예제 환경 파일을 복사한 뒤 값을 채웁니다.

```sh
cp .env.example .env
```

```text
DISCORD_BOT_TOKEN=...
DISCORD_GALLERY_CHANNEL_ID=...
```

토큰은 서버에서만 읽으며 `.env`는 Git에서 제외됩니다. 자세한 설정 방법은
[`DISCORD_GALLERY_SETUP.md`](./DISCORD_GALLERY_SETUP.md)를 참고하세요.

## 주요 경로

- `src/routes/+page.svelte`: 홈
- `src/routes/member/+page.svelte`: 용사 목록
- `src/routes/gallery/+page.svelte`: 사진 갤러리
- `src/routes/api/gallery/+server.ts`: Discord 사진 API
- `static/images`: 정적 이미지
