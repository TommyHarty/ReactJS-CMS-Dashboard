import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Router, Route, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// a little function to help us with reordering the result
const reorder =  (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the pages look a bit nicer
  userSelect: 'none',
  padding: '1px',
  margin: `0 0 1px 0`,

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({

});

export default class ReorderPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    }
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount(){
      axios.get('http://localhost:8000/all-pages')
      .then(response => {
          this.setState({ pages: response.data });
      })
      .catch(function (error) {
         console.log(error);
      })
  }

  onDragEnd (result) {
    // dropped outside the list
    if(!result.destination) {
       return;
    }

    const pages = reorder(
      this.state.pages,
      result.source.index,
      result.destination.index
    );

    this.setState({ pages });

    pages.map((item, index) => (
        item.order = index++
    ))

    this.setState({ pages });

    console.log(pages)

    pages.map((item, index) => (
        axios.patch('http://localhost:8000/update-page-order/', {id:item.id, order:item.order}).then((response) => {
            console.log('Success');
        })
        .catch(function (error) {
            console.log(error);
        })
    ))

  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
     return (
       <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.pages.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                      <div style={{ backgroundColor:'#ffffff',
                                           padding:'15px',
                                           paddingLeft:'30px',
                                           marginBottom:'5px',
                                           borderRadius:'4px',
                                           border: '1px solid #ddd',
                                           // boxShadow: '0 7px 14px 0 rgba(50, 50, 93, 0.035), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
                                 }}
                                 key={item.id}>
                          <div className="row">
                              <div className="col-xs-10" style={{ color:'#333', fontSize:'16px' }}>
                                  <div style={{ border:'1px solid #ddd', backgroundColor:'#f7f7f7', display:'inline-block', height:'50px', width:'50px', overflow:'hidden', position:'relative', right:'11px', top:'5px', backgroundImage:`url("${item.featured_image}")`, backgroundSize:'cover' }}>
                                  </div>
                                  <div style={{ display:'inline-block', position:'relative', bottom:'1px' }}>
                                      <div>{item.title}</div>
                                      {item.type === 'Products' &&
                                          <small style={{ color:'#636b6f' }}>{item.type} Page with {item.products.length} products</small>
                                      }
                                      {item.type !== 'Products' &&
                                          <small style={{ color:'#636b6f' }}>{item.type} Page</small>
                                      }
                                  </div>
                              </div>
                              <div className="col-xs-2 text-right">
                                   <Link to={"/pages/edit-page/"+item.id}>
                                       <IconButton style={{ position:'relative', top:'6px' }}>
                                           {item.status === 1 &&
                                              <FontIcon color={'#1fc8db'} className="material-icons">visibility</FontIcon>
                                           }
                                           {item.status === 0 &&
                                              <FontIcon color={'#1fc8db'} className="material-icons">visibility_off</FontIcon>
                                           }
                                       </IconButton>
                                   </Link>
                              </div>
                          </div>
                      </div>
                      </div>
                      {provided.placeholder}
                    </div>
                   )}
                </Draggable>
               ))}
              {provided.placeholder}
            </div>
           )}
        </Droppable>
      </DragDropContext>
     );
  }
}

// Put the thing into the DOM!
// ReactDOM.render(<App />, document.getElementById('app'));
