import React, { Component } from 'react';
class Page extends Component {
  state = {
    sayi1: 0,
    sayi2: 0,
    sonuc: 0,
    sayac: 1,
    sayi:0,
    operator: ''
  };
  birlestir(key) {
    if (this.state.sayac === 1) {
      let sayi = this.state.sayi1;
      sayi = sayi * 10 + key;
      console.log(sayi);
      this.setState({ sayi1: sayi });
      this.setState({ sayi: sayi });
    }
    if (this.state.sayac === 2) {
      let sayi2 = this.state.sayi2;
      sayi2 = sayi2 * 10 + key;
      console.log(sayi2);
      this.setState({ sayi2: sayi2 });
      this.setState({ sayi: sayi2 });
    }
  }
  reset() {
    this.setState({
      sayac: 1,
      sayi:0,
      sayi1: 0,
      sayi2: 0,
      sonuc: 0
    });
  }
  operatoral(op) {
    this.setState({ sayac: 2 });
    this.setState({ operator: op });
  }
 
  hesapla() {
    let snc=0;
    if (this.state.operator === '+') {
      snc= this.state.sayi1 + this.state.sayi2;
    }
    if (this.state.operator === '-') {
      snc = this.state.sayi1 - this.state.sayi2;
    }
    if (this.state.operator === 'x') {
      snc= this.state.sayi1 * this.state.sayi2;
    }
    if (this.state.operator === '/') {
      snc = this.state.sayi1 / this.state.sayi2;
    }
    if (this.state.operator === '%') {
      snc = this.state.sayi1 % this.state.sayi2;
    }
    this.setState({ sonuc: snc });
    this.setState({ sayi: snc });
    this.setState({
      sayi:snc,
      sayi1: snc,
      sayi2: 0,
      sayac: 2
    });
  }
  render() {
    return (
      <div
        className="container d-flex justify-content-center  flex-column aling-items-center mt-5"
        style={{ width: '245px'  }}
      >
        <div className=" d-flex justify-content-end align-items-end bg-dark pr-2 " style={{ height: '70px' ,width:"216px"}}>
          <p className="text-right font-weight-bolder" style={{ color: 'white' ,fontSize:"22px"}}>
            {this.state.sayi}
          </p>
          
        </div>
        <div className="container d-flex flex-column bg-secondary m-0 p-0">
          
          <div className="container d-flex flex-row p-0">
            <button
              onClick={() => this.birlestir(7)}
              className="btn btn-light btn-block btn-lg m-1"
            >
              7
            </button>
            <button
              onClick={() => this.birlestir(8)}
              className="btn btn-light btn-block btn-lg m-1"
            >
              8
            </button>
            <button
              onClick={() => this.birlestir(9)}
              className="btn btn-light  btn-block btn-lg m-1"
            >
              9
            </button>
            <button
              onClick={() => this.reset()}
              className="btn btn-danger btn-block btn-lg m-1 "
            >
              C
            </button>
            
          </div>
          <div className="container d-flex flex-row p-0">
            <button
              onClick={() => this.birlestir(4)}
              className="btn btn-light btn-block btn-lg m-1"
            >
              4
            </button>
            <button
              onClick={() => this.birlestir(5)}
              className="btn btn-light  btn-block btn-lg m-1"
            >
              5
            </button>
            <button
              onClick={() => this.birlestir(6)}
              className="btn btn-light  btn-block btn-lg m-1"
            >
              6
            </button>
            <button
              onClick={() => this.operatoral('/')}
              className="btn btn-light  btn-block btn-lg m-1 "
            >
              /
            </button>
          </div>
          <div className="container d-flex flex-row p-0">
            <button
              onClick={() => this.birlestir(1)}
              className="btn btn-light btn-block btn-lg m-1"
            >
              1
            </button>
            <button
              onClick={() => this.birlestir(2)}
              className="btn btn-light btn-block btn-lg m-1"
            >
              2
            </button>
            <button
              onClick={() => this.birlestir(3)}
              className="btn btn-light btn-block btn-lg m-1"
            >
              3
            </button>
            <button
              onClick={() => this.operatoral('x')}
              className="btn btn-light btn-block btn-lg m-1 "
            >
              *
            </button>
          </div>
          <div className="container d-flex flex-row p-0">
            <button
              onClick={() => this.birlestir(0)}
              className="btn btn-light btn-block btn-lg m-1"
            >
              0
            </button>
            <button
              onClick={() => this.operatoral('-')}
              className="btn btn-light btn-block btn-lg m-1 "
            >
              -
            </button>
            <button
              onClick={() => this.operatoral('+')}
              className="btn btn-light btn-block btn-lg m-1 "
            >
              +
            </button>
            <button
              onClick={() => this.hesapla()}
              className="btn btn-light btn-block btn-lg m-1 "
            >
              =
            </button>
          </div>
          </div>
          </div>
      
        
    );
  }
}

export default Page;
