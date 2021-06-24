import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを追加" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のtodo</p>
        <ul>
          <div>
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
        <p>完了のtodo</p>
        <ul>
          <div>
            <li>ううううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  );
};
