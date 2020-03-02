import React from 'react'

// STATE == OBJECT
// STATE == data store
// STATE changes component re render
// STATE only at class component

class LatihanState extends React.Component{
    // INISIALISASI STATE
    state = { 
        nama : 'fikri',
        num : 1,
        todo : ['bangun tidur'],
        my_name : ''
    }

    // UBAH STATE
    onBtnClick = () => {
        this.setState({nama  : "budi"})
    }

    onBtnPlusClick = () => {
        this.setState({num : this.state.num + 1})
        // var angka = this.state.num
        // angka ++
        // var yangMauDiubah = {num : angka}
        // this.setState(yangMauDiubah)
    }

    onBtnMinClick = () => {
        this.setState({num : this.state.num == 0 ? 0 : this.state.num - 1})

        // var angka = this.state.num
        // angka --
        // if(angka > 0){
        //     var yangMauDiubah = {num : angka}
        //     this.setState(yangMauDiubah)
        // }else{
        //     var yangMauDiubah = {num : 0}
        //     this.setState(yangMauDiubah)
        // }
    }

    onBtnAddClick = () => {

        this.setState({todo : [...this.state.todo , this.refs.todo.value]})
        this.refs.todo.value = ''

        // ambil value dari inputan
        // var newTodo = this.refs.todo.value // pergi
        // console.log(newTodo)

        // // push ke dalam state
        // var todos = this.state.todo // ['bangun tidur']
        // todos.push(newTodo) // ['bangun tidur' , 'pergi']
        // var yangMauDiubah = {todo:todos}
        // this.setState(yangMauDiubah)

        // // input di reset
        // this.refs.todo.value = ''
    }

    onBtnNamaClick =() => {
        this.setState(
            {
                my_name : this.refs.myName.value, 
                num : 100,
                nama : 'andi'
            }
        )
        this.refs.myName.value = ''   
    }

    render(){
        console.log('render ke triger')
        return (
            <div className='container-fluid'>
                <h1>Ini Page Latihan State</h1>
                {/* LATIHAN 1 */}
                <div className='mt-3'>
                    nama saya adalah = {this.state.nama}
                </div>
                <button onClick={this.onBtnClick}  className='btn btn-primary'>klik</button>
                <hr/>
                
                {/* LATIHAN 2 */}
                <div>
                    <span onClick={this.onBtnMinClick} style={{backgroundColor:'red',cursor:'pointer'}}> - </span>  
                    <span className='mx-2' > {this.state.num} </span> 
                    <span onClick={this.onBtnPlusClick} style={{backgroundColor:'red',cursor:'pointer'}}>  + </span>
                </div>

                <hr/>

                {/* LATIHAN 3 */}
                <div>
                    My Todo List = {this.state.todo.join(' , ')} <br/>  
                    <input ref='todo' type="text" placeholder='what will you do?'/>
                    <button onClick={this.onBtnAddClick}>add</button>
                </div>

                <hr/>


                {/* LATIHAN 4 */}
                <div>
                    Nama Saya adalah = {this.state.my_name} <br/>
                    <input ref='myName' type="text" placeholder='your name'/> <button onClick={this.onBtnNamaClick}>klik</button>
                </div>

            </div>
        )
    }
}

export default LatihanState;