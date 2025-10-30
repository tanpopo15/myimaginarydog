// ========== 背景選択画面のJavaScript ==========

/**
 * 現在選択されている背景を取得して表示
 */
window.addEventListener('load', () => {
  // localStorageから現在の背景を取得
  const currentBg = localStorage.getItem('selectedBackground') || 'cream';
  
  // 現在選択されている背景カードをハイライト
  highlightSelectedBg(currentBg);
});

/**
 * 選択中の背景カードをハイライトする関数
 * @param {string} bgName - 背景名（例: "cream", "pink"）
 */
function highlightSelectedBg(bgName) {
  // 全ての背景カードを取得
  const bgCards = document.querySelectorAll('.bg-card');
  
  bgCards.forEach(card => {
    // リンクURLから背景名を取得（例: "index.html?bg=pink" → "pink"）
    const href = card.getAttribute('href');
    const cardBg = new URLSearchParams(href.split('?')[1]).get('bg');
    
    // 現在選択されている背景と一致する場合、スタイルを変更
    if(cardBg === bgName) {
      card.style.borderColor = '#ff9ac2';
      card.style.borderWidth = '3px';
      card.style.borderStyle = 'solid';
    }
  });
}