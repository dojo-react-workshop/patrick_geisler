`use strict`
const Container = (props) => {
    const squares = props.squares.map((squareObj, idx) => {
        return <Square key={idx} colorData={squareObj}/>
    })
    return (
        <div>
            <h1>Take a look at my squares!</h1>
            {squares}
        </div>
    )

}

const Square = (props) => {
    const { colorData } = props;
    const style = {
        height: '100px',
        width: '120px',
        fontSize: '20px',
        color: 'black',
        backgroundColor: 'white',
        display: 'inline-block',
        paddingLeft: '10px'

    };
    const buttonStyle = {
        fontSize: '20px',
        color: 'black',
        display: 'inline-block',
    };
    const wrapper = {
        display: 'inline-block'
    };

    const imgStyle = {
        height: '40px',
        width: '40px',
        display: 'inline-block',
        backgroundSize: '40px',
        background: 'url(plus.png) no-repeat'
    };

     const text = `${colorData.title}`;
     const count = `${colorData.count}`;

    function counterFunc(){
      console.log('swwt');
    }
    return (
      <div>
        <div style={wrapper}>
          <div style={buttonStyle}>
            {count}
          </div>
          <div style={style}>
            {text}
          </div>
          <button style={imgStyle} onClick={counterFunc}/>
        </div>
      </div>
    )
}
