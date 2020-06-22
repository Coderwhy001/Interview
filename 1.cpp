// #include <stdio.h>
// #include <stdlib.h>
// #include <string.h>
// struct ticket /* 定义火车票为结构体 */
// {
//     const char* starName;
//     const char* endName;
//     int number;
// };
// struct user /* 定义用户为结构体 */
// {
//     char* userName;
//     char* passWord;
// };
// struct ticket tickets[4];/* 火车票里有 4 个对象 */
// struct user user1 = { NULL,NULL };/* 用户初始为空 */
// struct user user2 = { NULL,NULL };
// int lq_index();/* 定义数组 */
// void gotolq_Index();
// int main()
// {
//     int i = 0;
//     const char* starNames[4] ={"南昌","深圳","广州","九江"};/*4 个起点 */
//     const char* endNames[4] = {"深圳","南昌","九江","广州"};/*4 个终点 */
//         for (i = 0; i < 4; i++)
//         {
//              tickets[i].starName = starNames[i];
//              tickets[i].endName = endNames[i];
//              tickets[i].number = rand() % 21 + 30;
//         }
//     /*for(i=0;i<4;i++)
//     {
//    printf("%s-%s
//    number:%d\n",tickets[i].starName,tickets[i].endName
//    ,tickets[i].number);
//     }*/
//     printf("\t********** 欢 迎 使 用 火 车 票 系 统**********\n");/* 输出主页面 */
//         while (true)
//         {
//             if (lq_index() == 5)
//                 break;
//         }
//         }
//         int lq_index()
//         {
//             int i = 0, j = 0;
//             char yn;
//             char c1[20];/*2 个数组 */
//             char c2[20];
//             char address[20],uname1[20],pass1[20],uname2[20],pass2[20];
//             printf("\n [1] 购票 [2] 注册 \n");
//             printf(" [3] 查询 [4] 登录 \n");
//             printf(" [5] 退出 \n");
//             printf(" 请输入编号 ");
//             scanf("%d", &i);
//             if (i == 1) 
//             {
//                 printf(" 输入目的地和出发地： ");
//                 scanf("%s %s",&c1,20,&c2,20); /* 接受用户输入的数据 */
//                 j = 0;
//                 for (i = 0; i < 4; i++)
//                 {
//                     j++;
//                     if (strcmp(tickets[i].starName,c1) == 0 && strcmp(tickets[i].endName,c2) == 0)/* 判断是否有票 */
//                     {
//                         if (tickets[i].number > 0)
//                         {
//                             printf(" 您的选择的线路 %s-%s 还剩 %d张票是否确定购买(y / n) : ",c1,c2,tickets[i].number);
//                             scanf("%c", &yn);
//                             if (yn == 'y' || yn == 'Y')
//                             {
//                                 if (user2.userName != NULL)
//                                 {
//                                     tickets[i].number--;
//                                     printf(" 恭喜您购票成功 ! ");
//                                 }
//                                 else 
//                                 {
//                                     printf(" 登录后才能购票 ! ");
//                                 }/* 如果没登录显示用户登录 */
//                                 gotolq_Index();/* 选择路线 */
//                             }
//                             else if (yn == 'n' || yn == 'N')
//                             {
//                                 gotolq_Index();
//                             }
//                             else
//                             {
//                                 printf(" 输入有误 !\n");
//                                 i--;
//                                 j--;
//                                 continue;
//                             }
//                             return 1;
//                         }
//                         else
//                         {
//                             printf(" 抱歉,您的选择的线路 %s-%s 已无票出售 !",c1,c2);/* 如果无票就提示 */
//                              gotolq_Index();
//                             return 1;
//                         }
//                     }
//                     else if (j == 4)/* 路线不存在提示 */
//                     {
//                         printf(" 您选择的线路 %s-%s 系统中不存在!",c1,c2);
//                         gotolq_Index();
//                         return 1;
//                     }
//                 }
//             }
//             else if (i == 2)
//             {
//                 printf(" 输入账号 :");/* 注册账号 */
//                 scanf("%s",&uname1,20);
//                 user1.userName = uname1;
//                 printf(" 输入密码 : ");
//                 scanf("%s", pass1,20);
//                 user1.passWord = pass1;
//                 printf(" 恭喜 %s用户注册成功!",user1.userName);
//                     gotolq_Index();
//             }
//             else if (i == 3)
//             {
//                 printf(" 输入要查询的地点： "); /* 查询车票 */
//                 scanf("%s",&address,20);
//                 printf(" 始发站 \t 终点站 \t 票数 \n");
//                 i = 0;
//                 for (i = 0; i < 4; i++)
//                 {
//                     if (strcmp(tickets[i].starName, address) == 0)
//                     {
//                         printf(" %s\t %s\t %d\n", tickets[i].starName, tickets[i].endName, tickets[i].number);
//                     }
//                     else {
//                         j++;
//                     }
//                     if (j == 4)
//                     {
//                         printf(" 未找到相应数据 !\n");
//                     }
//                 }
//                 gotolq_Index();
//                 return 1;
//             }
//             else if (i == 4) {
//                 printf(" 输入账号 :");/* 用户登录 与已经注册的判断 */
//                 scanf("%s",&uname2,20);
//                 user2.userName = uname2;
//                 printf(" 输入密码 : ");
//                 scanf("%s",&pass2,20);
//                 user2.passWord = pass2;
//                 if (user1.userName != NULL)
//                 {
//                     if (strcmp(user1.userName, user2.userName) == 0 && strcmp(user1.passWord, user2.passWord) == 0)
//                     {
//                         printf(" 欢 迎 %s 用 户 使 用 本 系 统!",user2.userName);
//                     }
//                     else {
//                         user2.userName = NULL;
//                         user2.passWord = NULL;
//                         printf(" 输入账号或者密码不一致 !");
//                     }
//                 }
//                 else {
//                     printf(" 请先注册用户 !");/* 不一致提示注册
//                     */
//                 }
//                 gotolq_Index();
//  }
//             else if (i == 5) {
//             printf(" 欢迎再次使用本系统 !");
//             return 5;
//  }
//  return 1;
//  }
//  void gotolq_Index()
//  {
//      printf(" 任意键返回首页 !"); /*返回 */
//          printf("\n**************************************\n");
//  }
