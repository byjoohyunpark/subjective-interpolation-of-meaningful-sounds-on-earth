import React, { Component } from 'react';
import './List.css';

export class List extends Component {

    render() {
        const list = this.props.list;
        const showContent = this.props.showContent;
        const content1 = list.map(
            content => {
                while (content.id <= 20) {
                    if (content.id < 10) {
                        return (
                            <div className="content" key={content.id}>
                                <form onClick={() => { showContent(content.id, content.content) }}>
                                    <div>
                                        {/* <span className="index">{content.id}. &nbsp;</span> */}
                                        {content.content1}&emsp;✕&emsp;{content.content2}</div>
                                </form>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="content" key={content.id}>
                                <form onClick={() => { showContent(content.id, content.content) }}>
                                    <div>
                                        {/* <span className="index">{content.id}.</span>  */}
                                        {content.content} </div>
                                </form>
                            </div>
                        )
                    }

                }
            })
        const content2 = list.map(
            content => {
                while (content.id > 20 && content.id <= 40) {
                    return (
                        <div className="content" key={content.id}>
                            <form onClick={() => { showContent(content.id, content.content) }}>
                                <div><span className="index">{content.id}.</span> {content.content}</div>
                            </form>
                        </div>
                    )
                }
            })


        return (
            <div className="list">
                <div className="content-wrapper" group="1">
                    {content1}
                </div>
                <div className="content-wrapper" group="2">
                    {content2}
                </div>
            </div>
        )

    }
}

export default List






// export class List extends Component {

//     render() {
//         const list = this.props.list;
//         const showContent = this.props.showContent;
//         const content = list.map(
//             content => {
//                 return (
//                     <div className="content" key={content.id}>
//                         <form onClick={() => { showContent(content.id) }}>
//                             <div>{content.id}. {content.content}</div>
//                         </form>
//                     </div>
//                 )
//             })


//         return (
//             <div className="list">
//                 {content}
//             </div>
//         )

//     }
// }