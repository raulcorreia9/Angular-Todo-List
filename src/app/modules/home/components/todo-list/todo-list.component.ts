import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
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

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public checkEmptyTask(task: string, index: number) {
    if(!task.length) {
      const confirm = window.confirm('Task sem conteúdo, deseja deletar?');
      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

}
