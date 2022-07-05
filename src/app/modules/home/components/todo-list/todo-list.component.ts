import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: 'Minha task #1', checked: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAllTaskList() {
    const confirmDelete = window.confirm('Deseja realmente deletar todos as tasks?');
    if(confirmDelete) {
      this.taskList = [];
    }
  }

}
