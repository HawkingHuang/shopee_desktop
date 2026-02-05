import * as Dialog from "@radix-ui/react-dialog";

type ResponsiveNoticeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function ResponsiveNoticeDialog({ open, onOpenChange }: ResponsiveNoticeDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          }}
        />
        <Dialog.Content
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: "20px 24px",
            maxWidth: 520,
            width: "90vw",
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
          }}
        >
          <p style={{ fontSize: 16, margin: 0, lineHeight: 1.6 }}>本作品因應蝦皮官方網頁和手機 App 完全獨立的策略，因此僅適合透過電腦和平版電腦網頁進行瀏覽</p>
          <p style={{ fontSize: 16, margin: 0, lineHeight: 1.6, marginTop: "8px" }}>登入功能僅透過 Redux 進行偽登入，輸入任一亂數即可</p>
          <p style={{ fontSize: 16, margin: 0, lineHeight: 1.6, marginTop: "8px" }}>如需嘗試加到購物車功能，請下滑至「每日新發現」區塊並點擊商品進行相關操作</p>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
            <Dialog.Close asChild>
              <button
                type="button"
                style={{
                  fontSize: 14,
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "1px solid #ddd",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                我知道了
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ResponsiveNoticeDialog;
