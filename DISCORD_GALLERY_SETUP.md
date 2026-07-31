# Discord 갤러리 자동 동기화

GitHub Actions가 3시간마다 Discord 사진 채널을 확인합니다. 새 첨부 이미지는 최대
1920px, 품질 82의 WebP로 변환하여 저장소에 자동 커밋합니다. Cloudflare Pages는 이
커밋을 감지해 자동 배포합니다.

## GitHub 저장소 설정

저장소 소유자가 **Settings → Secrets and variables → Actions**에서 다음 Repository
secret 두 개를 등록해야 합니다.

- `DISCORD_BOT_TOKEN`: 갤러리 읽기용 봇 토큰
- `DISCORD_GALLERY_CHANNEL_ID`: 사진 채널 ID

그리고 **Settings → Actions → General → Workflow permissions**에서
`Read and write permissions`를 선택해야 자동 커밋할 수 있습니다.

설정 후 **Actions → Discord 갤러리 동기화 → Run workflow**를 누르면 즉시 시험할 수
있습니다. 이후에는 3시간마다 자동 실행되며 새 사진이 없으면 커밋하지 않습니다.

## 로컬 실행

`.env.example`을 `.env`로 복사하고 실제 테스트용 토큰과 채널 ID를 입력한 뒤 실행합니다.

```bash
pnpm gallery:setup
pnpm gallery:sync
```

생성되는 파일:

- `static/images/gallery/discord/<Discord 첨부파일 ID>.webp`
- `src/lib/assets/gallery/discord-images.json`

봇에는 테스트 또는 실제 사진 채널의 `View Channel`, `Read Message History` 권한과
Developer Portal의 `Message Content Intent`가 필요합니다.
