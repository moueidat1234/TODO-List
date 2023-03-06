

(function (app) {
    'use strict';

    app.controller('todoCtrl', todoCtrl);
    todoCtrl.$inject = [];
    function todoCtrl() {

        var vm = this;
        vm.todo = '';
        vm.allCompleted = false;

        vm.todos = [];


        vm.addTodo = addTodo;
        vm.edit = edit;
        vm.editDone = editDone;
        vm.remove = remove;
        vm.completed = completed;
        vm.total = total;
        vm.markAll = markAll;
        vm.archive = archive;


        ////////


        function addTodo() {
            if (vm.todo === '') { return; }
            vm.todos.push({ text: vm.todo, done: false, editing: false });
            vm.todo = '';
        }
        function edit(todo) {
            todo.original = todo.text;
            todo.editing = true;
        }
        function editDone(todo, save) {
            if (!save) todo.text = todo.original;
            todo.editing = false;
            todo.originial = null;
        }
        function remove(todo) {
            var idx = vm.todos.indexOf(todo);
            if (idx > -1) {
                vm.todos.splice(idx, 1);
            }
        }

        function completed() {
            return vm.todos.filter(function (v) {
                return v.done;
            }).length + ' completed';
        }

        function total() {
            return vm.todos.length + ' total';
        }

        function archive() {
            vm.todos = vm.todos.filter(function (val) {
                return !val.done;
            });
        }

        function markAll() {
            vm.allCompleted = !vm.allCompleted;
            vm.todos.forEach(function (todo) {
                todo.done = vm.allCompleted;
            });
        };

    }
}(angular.module('app', [])));
