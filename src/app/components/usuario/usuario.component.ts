import { Component, OnInit } from "@angular/core";

import { UserService } from "../../services/user.service";
import { NgForm } from "@angular/forms";
import { User } from "../../models/User";
import { Router } from '@angular/router';

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"],
  providers: [UserService],
})
export class UsuarioComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    let userEmail = localStorage.getItem('userEmail');
    if (userEmail == "admin@admin.es"){
      this.getUsers();
    }else{
      alert("Insuficientes privilegios")
      this.router.navigate(['/inicio']);
    }
  }

  addUser(form?: NgForm) {
    if (form.value._id) {
      this.userService.putUser(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getUsers();
      });
    } else {
      this.userService.postUser(form.value).subscribe((res) => {
        this.getUsers();
        this.resetForm(form);
      });
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.users = res;
    });
  }

  editUser(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string, form: NgForm) {
    if (confirm("¿Está seguro de que quiere borralo?")) {
      this.userService.deleteUser(_id).subscribe((res) => {
        this.getUsers();
        this.resetForm(form);
      });
    }
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }
}
