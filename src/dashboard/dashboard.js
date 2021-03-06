import React from 'react'
import './dashboard.css'
import authenticate from '../auth'
import Note from '../notes/notes'
import EditItem from './editItem'
import logo1 from './Layer 1.png'
import logo2 from './Layer 3.png'

const firebase = require('firebase')



class DashboardComponent extends React.Component
{

    constructor()
    {
        super()


 //states are used to store the data, whenever the data changes the component will re-render
    this.state = 
    {
 
       //for local storage
         email:null,
         name:null,
         content:null,
         title:null,
         id:null,
         modal:null,
         color:'#FFFF88',
      

      //To get the data from the database
       firebaseGetItems:[{
           id:null,
           title:null,
           content:null,
           color:'#FFFF88'
       }]
    
   
    }
    }

    

    render()
    {
 
      
        this.change = (type,e) =>
         {
           switch(type)
           {
               case 'title':
                   this.setState({title:e.target.value})
                   break

                case 'content':
                   this.setState({content:e.target.value})
                    
                    break

                default:
                    break
           }
        
           document.getElementById('title').style.display='inline-block' 
           document.getElementById('notes').style.borderTopRightRadius = '0px';
           document.getElementById('notes').style.borderTopLeftRadius = '0px';

            
        }


        this.contentSubmit = (e)=>
        {
            if(this.state.content!==null && this.state.content!=='')
            {
            this.addContentToFireBase()

            }
            

           
            e.preventDefault()
            document.getElementById('title').value = ''
            document.getElementById('title').style.display='none'  
            document.getElementById('notes').value = ''
            document.getElementById('notes').style.borderTopRightRadius = '23px';
            document.getElementById('notes').style.borderTopLeftRadius = '23px';
            console.log(this.state)
 
            
        }

       this.addContentToFireBase = async () =>
        {
            
            const notes = {
               body:this.state.content,
                title:this.state.title,
                color:this.state.color,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            }
            
           const data = await firebase
            .firestore()
            .collection('users')
            .doc(localStorage.getItem('email'))
            .collection('notes')
            .add(notes)

            this.setState({id:data.id})
            console.log(this.state.id)
            this.setState({firebaseGetItems:[{
                'id':this.state.id,
                'title':this.state.title,
                'content':this.state.content,
                'color':this.state.color
            
            
            },...this.state.firebaseGetItems]})

            this.setState({title:null})
            this.setState({content:null})



        }
  

        


        
        this.onDelete = (id) =>
        {
            
         const array=  this.state.firebaseGetItems.filter((item)=>
           {
               return item.id!==id
           }
            )

            this.setState({firebaseGetItems:array})

            firebase
            .firestore()
            .collection('users')
            .doc(localStorage.getItem('email'))
            .collection('notes')
            .doc(id)
            .delete()
           
 

        }

        this.editItem = (id,title,content) => 
        {
            
                this.setState({modal:true})
                this.setState({id:id})
                this.setState({title:title})
                this.setState({content:content})


            

        }

        this.closeItem = () =>
        {
            this.setState({modal:false})
            this.setState({id:null})
            this.setState({title:null})
            this.setState({content:null})

        }

        this.color = (color,id) =>
        {
            this.setState({color: color})
            this.state.firebaseGetItems.forEach(i => {
                if(i.id===id)
                {
                   i.color = color
                }}
                )

            firebase
            .firestore()
            .collection('users')
            .doc(this.state.email)
            .collection('notes')
            .doc(id)
            .update({color:color})
        }


        this.save = (id,title,content) =>
        {
            this.state.firebaseGetItems.forEach((i) => {

                if(i.id == id)
                {
                   
                    if(content!==null && title!==null)
                    {
                        i.content= content
                        i.title = title
                    }
                    if(content!==null && title===null)
                    {
                        i.content = content
                    }
                    if(content===null && title!=null)
                    {
                        i.title=title
                    }
                    
                }
            })

            if(content!==null && title!==null)
            {
             firebase
            .firestore()
            .collection('users')
            .doc(this.state.email)
            .collection('notes')
            .doc(id)
            .update({
                title:title,
                 body:content
            })


            }
            if(content!==null && title===null)
            {
                firebase
                .firestore()
                .collection('users')
                .doc(this.state.email)
                .collection('notes')
                .doc(id)
                .update({
                    body:content
                })
    

            }

            if(content===null && title!=null)
            {
                firebase
                .firestore()
                .collection('users')
                .doc(this.state.email)
                .collection('notes')
                .doc(id)
                .update({
                    title:title
                })

            }
  


        }

        
    
        

        return(
 
    <div id='dashboard' >
               
            <header id='header'>
                <div id='imgs'>
                <img src={logo1} id='logo1'></img>
                <img src={logo2} id='logo2'></img>
                </div>
                
               <div id='nn'>
                <h3 id='namess'>{this.state.name}</h3>
               
                <button id='logout' onClick ={()=>{authenticate.logout(()=>{this.props.history.push('/')})}}>Logout</button>
                </div>
                </header>
            <div id='containers'>
               
                <div id='inp' >
                    
                    <form onSubmit={e => this.contentSubmit(e)}>
                
                <input type='text' id='title' name='title'  placeholder='Title:'onChange={e=> this.change('title',e)} /><br />
             
               <textarea id='notes'  name='content'  placeholder='Enter Your Notes..' onChange={e=> this.change('content',e)}/><br />         
                <button id='add' type='submit' >ADD</button>
                </form>
                </div>
                <div id='content'>
                    

                 { 

                  
                 this.state.firebaseGetItems.map((note)=>(
                     note.content?
                
                     <Note title={note.title} color={note.color} content={note.content} key={note.id} id={note.id} deleteItem = {this.onDelete} editItem ={this.editItem} colors={this.color}/> 
                    
                    :

                    null
                    
                 ))
           

                 }
                 {
                           this.state.modal === true?
                           <EditItem close={this.closeItem} id={this.state.id} title={this.state.title} content={this.state.content} save={this.save}/>
                           :
                           null
                        
                           
                 }
                 
                     
                

                 
          
                 
                </div>
            </div>
            </div>        
        )    
    }


    componentDidMount = () => {
       
        
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr)
            this.props.history.push('/')

            else{
                this.setState({firebaseGetItems:[{'title':null,'content':null,'id':null,'color':null}]})
               
               const name   = await firebase
                                    .firestore()
                                    .collection('names')
                                    .where('email','==',localStorage.getItem('email'))
                                    .get()
                    
                    let data = name.docs
                    let arr = []
                    data.forEach((i)=>arr.push(i.data()))
                    let email = arr[0].email
                    let names = arr[0].name

                    this.setState({email:email})
                    this.setState({name:names})
                    

                                  

                                        
               const snapShot= await firebase
               .firestore()
               .collection('users')
               .doc(localStorage.getItem('email'))
               .collection('notes')
               .orderBy('timestamp','desc')
               .get()
               

               return(snapShot.docs.map(doc=>{
                
                this.setState({
                    firebaseGetItems: [ ...this.state.firebaseGetItems, {
                        'title':doc.data().title,
                        'content': doc.data().body,
                        'id': doc.id,
                        'color':doc.data().color
                    }],
                  });
                  
                  

               })

               

               
               
               
               
               )

               
            
            }

        })
    }
}


export default DashboardComponent