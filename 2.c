#include <stdio.h>

#include <stdlib.h>

#include <malloc.h>

#include <string.h>

#define MAXNUM 10000

#define Num 100

typedef struct train

{

  int Train_num; //火车编号

  char Train_end[10]; //终点站

  int Train_price; //票价

  int leftnum; //余票数量

} Train_Ticket;

typedef struct person
{

  int mark; //标记

  int snum; //身份号码

  char sex[10]; //买票人性别//char Train_start[8];

  char name[10]; //买票人姓名

} Person;

typedef struct node

{

  Train_Ticket data[MAXNUM];

  int len;

} SeqList;

Person pa1[Num], pa2[Num];

void init_Seqlist(SeqList *);

void Sale(SeqList *, FILE *);

void Withdraw(FILE *);

void Inquiry(SeqList *);

void Select(SeqList *, FILE *);

void Delete(SeqList *);

void Init(SeqList *, struct train t);

void Input(SeqList *);

void Exchange(SeqList *, FILE *fp);

int main()

{

  SeqList *q;

  FILE *fp;

  fp = fopen("train.dat", "wb");

  q = (SeqList *)malloc(sizeof(SeqList));

  int sel;

  Input(q);

  while (1)
  {

    printf("-------------------------------------\n");

    printf("-----Welcome to NanChang trainstation--\n");

    printf("1-- 设置车次 --"); //初始化

    printf("\n2-- 买票 --"); //买票

    printf("\n3-- 改签 --"); //改签

    printf("\n4-- 退票 --"); //退票

    printf("\n5-- 删除车次 --"); //删除车次

    printf("\n6-- 个人查询 --"); //查询

    printf("\n7-- 余票查询 --"); //

    printf("\n8-- 退出 --"); //退出

    printf("\n-------------------------------------");

    printf("\nPlease input your choice:");

    scanf("%d", &sel);

    getchar();

    switch (sel)

    {

    case 1:

      init_Seqlist(q);
      break;

    case 2:

      if (q->len == 0)

      {

        printf("------------------\n");

        printf(" No tickets!\n");

        printf("------------------\n");
        break;
      }
      else
      {

        Sale(q, fp);
        break;
      }

    case 3:

      Exchange(q, fp);
      break;

    case 4:

      Withdraw(fp);
      break;

    case 5:

      Delete(q);
      break;

    case 6:

      Select(q, fp);
      break;

    case 7:

      Inquiry(q);
      break;

    case 8:

      printf("------------------------------\n");

      printf("---Thank you for your use！---\n");

      printf("------------------------------\n");

      exit(1);

    default:
      printf("Enter error!!\n");
    }

    printf("请按ENTER返回主菜单\n");

    getchar();
  }

  return 0;
}

void Input(SeqList *L)

{

  int i;

  struct train tra[5] = {{206, "北京", 200, 20},

                         {301, "成都", 350, 20},

                         {432, "上海", 400, 20},

                         {783, "青岛", 175, 20},

                         {312, "杭州", 480, 20}

  };

  for (i = 0; i < 5; i++)

    Init(L, tra[i]);
}

void Init(SeqList *L, struct train t)

{

  int i = L->len;

  L->data[i].Train_num = t.Train_num;

  strcpy(L->data[i].Train_end, t.Train_end);

  L->data[i].Train_price = t.Train_price;

  L->data[i].leftnum = t.leftnum;

  L->len++;
}

void init_Seqlist(SeqList *L)

{

  int i, d, n;

  d = L->len;

  printf("-------------车次设置-------------\n");

  printf("请输入你想设置的车次数量: ");

  scanf("%d", &n);

  for (i = d; i < d + n; i++)
  {

    printf("请输入车次编号：");

    scanf("%d", &L->data[i].Train_num);

    printf("请输入车次终点站:");

    scanf("%s", &L->data[i].Train_end);

    printf("请输入设置的票价:");

    scanf("%d", &L->data[i].Train_price);

    printf("请输入余票的数量:");

    scanf("%d", &L->data[i].leftnum);

    L->len++;

    if ((L->len) > 1 && i < (L->len - 1))

    {

      printf("请输入下班车次信息\n");
    }
  }

  printf("Initiation finish!\n");
}

void Sale(SeqList *L, FILE *fp)

{

  int i = 0, k, a, j;

  if ((fp = fopen("train.dat", "ab+")) == NULL)

  {

    printf("Cannot open file!\n");

    exit(1);
  }

  printf("------------买票服务------------\n");

  printf("请输入你想购置车票数:\n");

  scanf("%d", &a);

  if (a > 1)
  {

    printf("请分别输入%d名乘客信息\n", a);
  }

  else if (a <= 1)

  {

    printf("请输入该名乘客信息\n");
  }

  for (i = 0; i < a; i++)

  {

    printf("请先输入你的姓名：");

    scanf("%s", &pa1[i].name);

    printf("请选择性别<男>F<女>M:");

    scanf("%s", &pa1[i].sex);

    do
    {

      if (strcmp(pa1[i].sex, "F") != 0 && strcmp(pa1[i].sex, "M") != 0)
      {

        printf("性别输入错误！请重新输入！\n");

        scanf("%s", &pa1[i].sex);
      }

    } while (strcmp(pa1[i].sex, "F") != 0 && strcmp(pa1[i].sex, "M") != 0);

    printf("请先输入你的身份证号码：");

    scanf("%d", &pa1[i].snum);
  }

  Inquiry(L);

  for (j = 0; j < a; j++)
  {

    printf("\nPlease input the Train_number you want to book(1~%d):");

    scanf("%d", &k);

    char answer[10];

    for (i = 0; i < L->len; i++)
    {

      if (k == L->data[i].Train_num)
      {

        pa1[j].mark = i; //标记点位

        printf("确定选择购买 %d 车次的列车吗(yes or no)\n", L->data[i].Train_num);

        scanf("%s", &answer);

        do

        {

          if (strcmp(answer, "yes") != 0)
          {

            printf("你的输入有误，请重新输入！\n");

            scanf("%s", &answer);
          }

        } while (strcmp(answer, "yes") != 0);

        if (strcmp(answer, "yes") == 0)
        {

          printf("你已支付该车票的价格%d元\n", L->data[i].Train_price);

          L->data[i].leftnum--;
        }
        else if (strcmp(answer, "no") == 0)
        {

          printf("请重新选择你要购买的车次编号\n");
        }
      }
    }

    printf("Tickets purchased success!\n");
  }

  for (i = 0; i < a; i++) //printf("%d\n",pa1[i].mark);

    fwrite((void *)pa1, sizeof(Person), a, fp);

  fclose(fp);
}

void Delete(SeqList *L)

{

  int n, i, true = 0;

  SeqList *q;

  q = (SeqList *)malloc(sizeof(SeqList));

  printf("\n--------------按照车次编号删除车次-------------\n");

  printf("请输入要删除的车次编号\n");

  scanf("%d", &n);

  for (i = 0; i < L->len; i++)
  {

    if (L->data[i].Train_num == n)

    {

      true = 1;

      if (i < L->len - 1)

      {

        L->data[i].Train_num = L->data[i + 1].Train_num;

        L->data[i].Train_price = L->data[i + 1].Train_price;

        L->data[i].leftnum = L->data[i + 1].leftnum;

        strcpy(L->data[i].Train_end, L->data[i + 1].Train_end);
        L->len--;

        printf("--------------------\n");

        printf("--已删除该车次信息--\n");

        printf("--------------------\n");
      }

      if (i == L->len - 1)

      {

        L->len--;

        printf("--------------------\n");

        printf("--已删除该车次信息--\n");

        printf("--------------------\n");
      }
    }
  }

  if (true == 0)

  {

    printf("No this ticket numbers!\n");
  }
}

void Select(SeqList *L, FILE *fp)

{

  SeqList *q;

  q = (SeqList *)malloc(sizeof(SeqList));

  int i, a, b, true = 0;

  printf("-------------------查询服务-------------\n");

  printf("----------------------------------------\n");

  printf("1.按乘客的名称查询 2.按乘客证件号查询\n");

  printf("---------------------------------------\n");

  if ((fp = fopen("train.dat", "rb+")) == NULL)

  {

    printf("Canot open file !\n");
  }

  fseek(fp, 0L, SEEK_END);

  int d = ftell(fp) / sizeof(Person);

  rewind(fp);

  fread((void *)&pa2, sizeof(Person), d, fp);

  scanf("%d", &a);

  switch (a)

  {

  case 1:

  {

    char na[20];

    printf("请输入该乘客的姓名：\n");

    scanf("%s", &na);

    for (i = 0; i < d; i++)

    {

      if (strcmp(pa2[i].name, na) == 0)
      {

        b = pa2[i].mark;

        true = 1;

        printf("-------------%s的车次信息-------\n", pa2[i].name);

        printf("始发站：南昌 终点站：%s\n", L->data[b].Train_end);

        printf("第%d号列车 票价: %d\n", L->data[b].Train_num, L->data[b].Train_price);

        printf("乘客姓名：%s\n", pa2[i].name);

        printf("乘客证件信息：%d\n", pa2[i].snum);

        printf("---------------------------------\n");
      }
    }
  }

  break;

  case 2:

  {

    int w;

    printf("请输入你的证件号：\n");

    scanf("%d", &w);

    for (i = 0; i < Num; i++)

    {

      if (pa2[i].snum == w)

      {

        b = pa2[i].mark;

        printf("-------------%s的车次信息-------\n", pa2[i].name);

        printf("始发站：南昌 终点站：%s\n", L->data[b].Train_end);

        printf("第%d号列车 票价: %d\n", L->data[b].Train_num, L->data[b].Train_price);

        printf("乘客姓名：%s\n", pa2[i].name);

        printf("乘客证件信息：%d\n", pa2[i].snum);

        printf("---------------------------------\n");
      }
    }
  }
  break;

  default:

    printf("------------------------------\n");

    printf("--你的输入有误，请重新输入！--\n");

    printf("------------------------------\n");

    Select(q, fp);

    break;
  }

  if (true == 0)

  {

    printf("没有该乘客的信息！\n");
  }

  fclose(fp); //getchar();
}

void Exchange(SeqList *L, FILE *fp)

{

  printf("------------改签服务-----------\n");

  printf("请输入你的姓名：\n");

  char ta[10];

  if ((fp = fopen("train.dat", "rb+")) == NULL)

  {

    printf("Canot open file !\n");
  }

  Person p[Num];

  fseek(fp, 0L, SEEK_END);

  int r = ftell(fp) / sizeof(Person);

  rewind(fp);

  fread((void *)&p, sizeof(Person), r, fp);

  int m, i, d, j, y, h;

  scanf("%s", &ta);

  for (i = 0; i < r; i++)

  {

    if (strcmp(p[i].name, ta) == 0)
    {

      d = p[i].mark;

      printf("你目前的目的地是%s站\n", L->data[d].Train_end);

      L->data[d].leftnum++;
    }
  }

  Inquiry(L);

  printf("请重新输入你想去的目的地的车次编号：");

  scanf("%d", &m);

  for (j = 0; j < L->len; j++)

  {

    if (m == L->data[j].Train_num)

    {

      L->data[j].leftnum--;

      printf("-------------------------\n");

      printf("---你的改签服务已完成！--\n");

      printf("-------------------------\n");

      d = j;
    }
  }

  for (i = 0; i < r; i++)

  {

    if (strcmp(p[i].name, ta) == 0)
    {

      p[i].mark = d;

      h = i;
    }
  }

  fseek(fp, h * sizeof(Person), SEEK_SET);

  fwrite((void *)&p, sizeof(Person), 1, fp);

  fclose(fp);
}

void Withdraw(FILE *fp)

{

  printf("----------退票服务-------\n");

  char na[10];

  printf("请输入你的姓名：\n");

  scanf("%s", &na);

  Person *pe;

  int i, j;

  if ((fp = fopen("train.dat", "rb")) == NULL)

  {

    printf("The file cannot be opened!\n");
  }

  fseek(fp, 0L, SEEK_END);

  int n = ftell(fp) / sizeof(Person);

  if (n == 1)

  {

    fclose(fp);

    fp = fopen("train.dat", "wb");
  }

  pe = (Person *)malloc(sizeof(Person) * (n - 1));

  rewind(fp);

  for (j = i = 0; i < n; i++)

  {

    fread((void *)(pe + j), sizeof(Person), 1, fp);

    if ((strcmp((pe + j)->name, na)) == 0)

      continue;

    j++;
  }

  fclose(fp);

  fp = fopen("train.dat", "wb");

  fwrite((void *)pe, sizeof(Person), n - 1, fp);

  printf("-------------------------\n");

  printf("---你的退票服务已完成！--\n");

  printf("-------------------------\n");
}

void Inquiry(SeqList *L)

{

  int i;

  if (L->len == 0)

  {

    printf("No ticket left!\n");
  }

  else

  {

    printf("----------------------------Tickets information----------------------\n");

    printf("火车车次编号 车 次 路 线 车票售价 剩余票数 ");

    for (i = 0; i < L->len; i++)
    {

      printf("\n %d 南昌--%s %d %d\n", L->data[i].Train_num, L->data[i].Train_end, L->data[i].Train_price, L->data[i].leftnum);

      printf("---------------------------------------------------------------------\n");
    }
  }
}