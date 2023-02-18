import "../Loading.css";

const Loading = () => {
  return (
    <>
    <h1>Yükleniyor</h1>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loading;
