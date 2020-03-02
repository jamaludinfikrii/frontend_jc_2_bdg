import React from 'react'


// Lifecycle = daur hidup
// proses suatu component sejak lahir sampai mati
// mounting , updating , unmounting
// lifecycle harus tau kapan ke trigger

// MOUNTING
    // CONSTRUCTOR
    // getDerivedStateFromProps (oper data dari props)
    // RENDER  // sering
    // ComponentDidMount (ambil data di api)  // sering

// Updating (setelah ada perubahan di state / props)
    // getDerivedStateFromProps
    // shouldComponentUpdate
    // render
    // getSnapshotBeforeUpdate
    // componentDidUpdate // sering

// Unmounting
    // ComponentWillUnmount

class LifecycleMethod extends React.Component{
    state = {
        nama : "fikri"
    }

    componentDidMount(){
        // Jalan Setelah Render Pertama (jalan Sekali)
        console.log('ini component did mount')
        // this.setState({nama : "seto"})

    }

    componentDidUpdate(){
        // Jalan Setelah re render / ada perubahan state
        console.log('ini component did update')
    }

    componentWillUnmount(){
        console.log('ini component will unmount')

    }
    render(){
        // Jalan Setiap ada re render / ada perubahan state
        console.log('ini render')
        return(
            <div>
                <h1>Latihan Life Cycle Method React</h1>
                <button onClick={() =>this.setState({nama : "seto"})}>Klik</button>
            </div>
        )
    }
}

export default LifecycleMethod;