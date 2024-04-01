// カード要素
const cardElement = document.querySelector('.card');

const onCardUpdate = ({ x, y }) => {
  const bounds = cardElement.getBoundingClientRect();
  // カード基準のx,y座標を取得
  // 例：(x, y) = (0, 0) → カードの左上にカーソルがある状態
  const pointerX = x - bounds.x;
  const pointerY = y - bounds.y;

  // カードの幅、高さに対するカーソルの位置の割合を取得
  const ratioX = pointerX / bounds.width;
  const ratioY = pointerY / bounds.height;
  // CSSで定義できるように変数をセット
  cardElement.style.setProperty('--ratiox', ratioX);
  cardElement.style.setProperty('--ratioy', ratioY);

  // カーソルの位置をパーセンテージで取得
  const mX = ratioX * 100;
  const mY = ratioY * 100;
  cardElement.style.setProperty('--mx', `${mX}%`);
  cardElement.style.setProperty('--my', `${mY}%`);

  // 傾きを設定
  const rX = (ratioX - 0.5) * -30;
  const rY = (ratioY - 0.5) * 50;
  cardElement.style.setProperty('--rx', `${rX}deg`);
  cardElement.style.setProperty('--ry', `${rY}deg`);

  const posX = 50 + (ratioX - 0.5) * 28;
  const posY = 50 + (ratioY - 0.5) * 28;
  cardElement.style.setProperty('--pos', `${posX}% ${posY}%`);
  cardElement.style.setProperty('--posx', `${posX}%`);
  cardElement.style.setProperty('--posy', `${posY}%`);

  const hyp =
    (Math.sqrt(Math.pow(ratioX - 0.5, 2) + Math.pow(ratioY - 0.5, 2)) * 10) / 7;
  cardElement.style.setProperty('--hyp', hyp);
};

// マウスポインター移動時にイベント発火
document.body.addEventListener('pointermove', onCardUpdate);
