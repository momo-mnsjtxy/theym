@extends('home.0.layout.index')
@section('title', '个人资料')
@section('content')
    <div id="vue" class="pt-3 pt-sm-0">
        <div class="col-12 col-md-6 mt-2">
            <div class="card">
                <div class="card-header">
                    个人资料
                </div>
                <div class="card-body">
                    <div class="card-header">
                        <div class="edit-avatar">
                            <img src="http://api.molure.cn/sjtx/api.php?lx=3" class="img-avatar">
                            <div class="avatar-divider"></div>
                                <div class="edit-avatar-content">
                                    <span class="label label-primary">UID:{{ auth()->user()->uid }}</span>
                                    <span class="label label-info">积分:{{ auth()->user()->point }}</span>
                                    <span class="label label-info">用户组:{{ auth()->user()->group?auth()->user()->group->name:'' }}</span>
                                </div>
                            </div>
                        </div>
                    <form id="form-profile">
                        <input type="hidden" name="action" value="profile">
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">用户名</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" value="{{ auth()->user()->username }}" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">用户组</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control"
                                       value="{{ auth()->user()->group?auth()->user()->group->name:'' }}" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">积分</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" value="{{ auth()->user()->point }}" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">状态</label>
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <select class="form-control" :value="{{ auth()->user()->status }}" disabled>
                                        <option value="0">已禁用</option>
                                        <option value="2">已认证</option>
                                        <option value="1">待认证</option>
                                    </select>
                                    @if(auth()->user()->status==1)
                                        <span class="input-group-append" @click="verify">
                                            <span class="input-group-text bg-info text-white">认证</span>
                                        </span>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">邮箱</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" value="{{ auth()->user()->email }}" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">旧密码</label>
                            <div class="col-sm-9">
                                <input type="password" name="old_password" class="form-control" placeholder="输入旧密码">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-3 col-form-label">新密码</label>
                            <div class="col-sm-9">
                                <input type="password" name="new_password" class="form-control" placeholder="输入新密码">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <a class="btn btn-info text-white float-right" @click="form('profile')">修改密码</a>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('foot')
    <script>
        new Vue({
            el: '#vue',
            data: {},
            methods: {
                verify: function () {
                    var vm = this;
                    this.$post("/home", {action: 'verify'})
                        .then(function (data) {
                            if (data.status === 0) {
                                vm.$message(data.message, 'success');
                            } else {
                                vm.$message(data.message, 'error');
                            }
                        });
                },
                form: function (id) {
                    var vm = this;
                    this.$post("/home", $("#form-" + id).serialize())
                        .then(function (data) {
                            if (data.status === 0) {
                                vm.$message(data.message, 'success');
                            } else {
                                vm.$message(data.message, 'error');
                            }
                        });
                },
            },
            mounted: function () {
            }
        });
    </script>
@endsection
