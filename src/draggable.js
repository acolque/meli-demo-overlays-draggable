import React from 'react';
import ReactDOM from 'react-dom';
import SimpleDraggable from 'react-draggable';

const contentImage = <img
    src='https://phantom-elmundo.unidadeditorial.es/55d12833a4a28706da63147e0b221f61/resize/1200/f/webp/assets/multimedia/imagenes/2020/10/30/16040166499749.jpg'
    style={{ width: '200px', height: '100px' }}
/>;

class Dragg extends React.Component {

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <div id='container' style={{ width: '600px', height: '750px', position: 'relative', padding: '0' }}>
                <div style={{
                    width: '600px',
                    height: '600px',
                    backgroundColor: 'white',
                }}>
                    <div style={{
                        width: '600px',
                        height: '600px',
                        borderStyle: 'dashed',
                        borderColor: 'yellow',
                        borderWidth: '1px',
                        background: `url(https://www.worldshop.eu/medias/sys_master/genmedia_PIC1761444_RL_01_w1500_c217224230255.jpg?1618974300298) no-repeat center center`,
                        backgroundSize: '600px',
                    }}>
                    </div>
                </div>
                <div style={{
                    width: '600px',
                    height: '150px',
                    borderStyle: 'dashed',
                    borderWidth: '1px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}>
                    <SimpleDraggable
                        // axis="x"
                        bounds="#container"
                        // handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        // position={null}
                        // grid={[25, 25]}
                        // scale={1}
                        // onStart={this.handleStart}
                        // onDrag={this.handleDrag}
                        // onStop={this.handleStop}
                        {...dragHandlers}
                    >
                        <div style={{ width: '200px', backgroundColor: 'yellow', color: 'black' }}>
                            <div className="handle">Envío Gratis! Envío Gratis rey! iuuhhh</div>
                        </div>
                    </SimpleDraggable>
                    <SimpleDraggable
                        // axis="x"
                        bounds="#container"
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        // position={null}
                        // grid={[25, 25]}
                        // scale={1}
                        // onStart={this.handleStart}
                        // onDrag={this.handleDrag}
                        // onStop={this.handleStop}
                        {...dragHandlers}
                    >
                        <div style={{ width: '200px', height: '30px', backgroundColor: 'green', color: 'lightGreen' }}>
                            <div className="handle">40% OFF!</div>
                        </div>
                    </SimpleDraggable>
                    <SimpleDraggable
                        // axis="x"
                        bounds="#container"
                        // handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        // position={null}
                        // grid={[25, 25]}
                        // scale={1}
                        // onStart={this.handleStart}
                        // onDrag={this.handleDrag}
                        // onStop={this.handleStop}
                        {...dragHandlers}
                    >
                        <div className="handle"
                            style={{
                                width: '200px',
                                height: '80px',
                                background: `url(https://phantom-elmundo.unidadeditorial.es/55d12833a4a28706da63147e0b221f61/resize/1200/f/webp/assets/multimedia/imagenes/2020/10/30/16040166499749.jpg) no-repeat center center`,
                                backgroundSize: 'cover',
                            }}
                        >
                        </div>
                    </SimpleDraggable>
                </div>
            </div>
        );
    }
}

export default Dragg;