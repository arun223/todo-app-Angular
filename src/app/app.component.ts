import { Component } from '@angular/core';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos:Todo[] = [
  ]

  onSubmit(item:any){
    let todo = new Todo(Guid.create(),item.value,false)
    this.todos.push(todo)
    this.clearForm()
  }

  clearForm(){
    (<HTMLFormElement>document.getElementById("add")).reset();
   }

   onComplete(id:Guid){
    let todo = this.todos.filter(item => item.id===id)[0];
    todo.isComplete = true;
   }
   
   
   onDelete(id:Guid){
    let todo = this.todos.filter(item => item.id===id)[0];
    let index = this.todos.indexOf(todo,0)
    if(index > -1){
      this.todos.splice(index,1)
    }

  }
}
