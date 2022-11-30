/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var menudata = {
    children: [
        { text: "首页", url: "index.html" },
        {
            text: "结构体", url: "annotated.html", children: [
                { text: "结构体", url: "annotated.html" },
                { text: "结构体索引", url: "classes.html" },
                {
                    text: "成员变量", url: "functions.html", children: [
                        { text: "全部", url: "functions.html" },
                        { text: "变量", url: "functions_vars.html" }]
                }]
        },
        {
            text: "文件", url: "files.html", children: [
                { text: "文件列表", url: "files.html" },
                {
                    text: "全局定义", url: "globals.html", children: [
                        {
                            text: "全部", url: "globals.html", children: [
                                { text: "a", url: "globals.html#index_a" },
                                { text: "b", url: "globals.html#index_b" },
                                { text: "c", url: "globals.html#index_c" },
                                { text: "d", url: "globals.html#index_d" },
                                { text: "f", url: "globals.html#index_f" },
                                { text: "g", url: "globals.html#index_g" },
                                { text: "h", url: "globals.html#index_h" },
                                { text: "i", url: "globals.html#index_i" },
                                { text: "m", url: "globals.html#index_m" },
                                { text: "p", url: "globals.html#index_p" },
                                { text: "r", url: "globals.html#index_r" },
                                { text: "s", url: "globals.html#index_s" },
                                { text: "t", url: "globals.html#index_t" }]
                        },
                        {
                            text: "函数", url: "globals_func.html", children: [
                                { text: "a", url: "globals_func.html#index_a" },
                                { text: "b", url: "globals_func.html#index_b" },
                                { text: "c", url: "globals_func.html#index_c" },
                                { text: "d", url: "globals_func.html#index_d" },
                                { text: "g", url: "globals_func.html#index_g" },
                                { text: "h", url: "globals_func.html#index_h" },
                                { text: "i", url: "globals_func.html#index_i" },
                                { text: "m", url: "globals_func.html#index_m" },
                                { text: "p", url: "globals_func.html#index_p" },
                                { text: "r", url: "globals_func.html#index_r" },
                                { text: "s", url: "globals_func.html#index_s" }]
                        },
                        { text: "变量", url: "globals_vars.html" },
                        { text: "类型定义", url: "globals_type.html" },
                        { text: "宏定义", url: "globals_defs.html" }]
                }]
        }]
}
