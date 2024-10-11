---
title: While Loops
tags:
  - programming
  - loops
  - c++
createTime: 2024/10/05 08:17:17
permalink: /article/while-instruction/
---

## Instrucțiunea while

Instrucțiunea `while` este o **structură repetitivă** folosită pentru executarea unui bloc de cod cât timp o condiție specificată este adevărată. Se folosește în situațiile în care **numărul de iterații nu este cunoscut dinainte**.

### Sintaxa

```cpp
while (Expresie)
    Instructiune
```

### Mod de execuție

1. Se evaluează `Expresie` și rezultatul se convertește la tipul `bool`.
2. Dacă rezultatul este `true`, se execută `Instructiune` și se revine la pasul 1.
3. Dacă rezultatul este `false`, execuția continuă după `while`.

### Observații importante

- Instructiunea `Instructiune` se execută atâta timp cât `Expresie` este **true**.
- Dacă `Expresie` este **false** de la început, `Instructiune` nu se execută deloc.
- Dacă în interiorul buclei nu se modifică variabilele folosite în `Expresie`, se poate crea o **buclă infinită**.

::: tip Exemplu
Programul de mai jos citește valoarea lui `n` și calculează **suma primelor n numere naturale**.

```cpp
#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int S = 0;
    int i = 1;
    while (i <= n) {
        S += i;
        i++;
    }
    cout << S << endl;
    return 0;
}
```
:::

Pentru mai multe detalii, vizitați [articolul original pe pbinfo.ro](https://www.pbinfo.ro/articole/26009/instructiunea-while).

## Ce s-a făcut în clasă

### 1. Descompunerea unui număr în cifrele sale și afișarea una sub alta

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n,cifra;
    cin>>n;
    while(n!=0){
        cifra=n%10;//aflam ultima cifra
        cout<<cifra<<endl;
        n=n/10;//eliminam cifra aflata
    }
    return 0;
}
```

### 2. Suma cifrelor unui număr

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n,cifra, suma;
    suma=0;
    cin>>n;
    while(n!=0){
        cifra=n%10;//aflam ultima cifra
        suma=suma+cifra;
        n=n/10;//eliminam cifra aflata
    }
cout<<suma;
    return 0;
}
```

### 3. Media aritmetică a cifrelor nenule ale unui număr

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n,cifra, suma, nr_cif;
    suma=0;
    nr_cif=0;
    cin>>n;
    while(n!=0){
        cifra=n%10;//aflam ultima cifra
        if(cifra!=0){
            nr_cif=nr_cif+1;//nr_cif++
            suma=suma+cifra;
        }
        n=n/10;//eliminam cifra aflata
    }
cout<<suma/nr_cif;
    return 0;
}
```

### 4. Afișarea cifrei maxime dintr-un număr

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n,cifra,maxx=0;
    cin>>n;
    while(n!=0){
        cifra=n%10;//aflam ultima cifra
        if(cifra>maxx){
            maxx=cifra;
        }
        n=n/10;//eliminam cifra aflata
    }
cout<<maxx;
    return 0;
}
```

### 5. Afișarea cifrei minime dintr-un număr

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n,cifra,minn=9;
    cin>>n;
    while(n!=0){
        cifra=n%10;//aflam ultima cifra
        if(cifra<minn){
            minn=cifra;
        }
        n=n/10;//eliminam cifra aflata
    }
cout<<minn;
    return 0;
}
```

### 6. Afișarea cifrelor unui număr de la stânga la dreapta, una sub alta

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n,cifra, p=1;
    cin>>n;
    while(p*10<=n){
        p=p*10;
    }
    while(p!=0){
        cifra=n/p;
        cout<<cifra<<endl;
        n=n%p;
        p=p/10;
    }
    return 0;
}
```

## Temă de facut de pe [PbInfo](https://www.pbinfo.ro/)

### Problema #65
[#65](https://www.pbinfo.ro/probleme/65)

```
--Cerinţă--
Să se scrie un program care să determine produsul cifrelor impare ale unui număr natural citit de la tastatură.

--Date de intrare--
Programul va citi de la tastatură un număr natural.

--Date de ieşire--
Programul va afişa pe ecran produsul cifrelor impare ale numărului citit.

--Restricţii şi precizări--
numărul citit va fi mai mic decât 231
dacă numărul nu conţine cifre impare atunci se va afişa valoarea -1
Exemplu:

Intrare
2705

Ieşire
35
```

### Problema #3979
[#3979](https://www.pbinfo.ro/probleme/3979)

```
--Cerința--
Se dă un număr natural nenul n. Calculați suma cifrelor lui n care sunt mai mari sau egale cu 3 și mai mici sau egale cu 7.

--Date de intrare--
Programul citește de la tastatură numărul n.

--Date de ieșire--
Programul va afișa pe ecran numărul S, reprezentând suma cifrelor lui n care sunt mai mari sau egale cu 3 și mai mici sau egale cu 7.

--Restricții și precizări--
1 ≤ n ≤ 2.000.000.000
--Exemplul 1:

Intrare
3590

Ieșire
8

--Explicație--
Cifrele lui n din intervalul [3,7] sunt 3 și 5, iar suma lor este 8.

-Exemplul 2:

Intrare
144620

Ieșire
14

--Explicație--
4 + 4 + 6 = 14

--Exemplul 3:

Intrare
2021

Ieșire
0

--Explicație--
Nu există cifre din intervalul [3,7], deci suma este 0.
```

### Problema #3078
[#3078](https://www.pbinfo.ro/probleme/3078)

```
--Cerința--
Scrieți un program care citește un număr natural n și o cifră k. Programul va calcula produsul P al cifrelor lui n diferite de cifra k.

--Date de intrare--
Programul citește de la tastatură numerele n k.

--Date de ieșire--
Programul va afișa pe ecran numărul P, cu semnificația din enunț. Dacă n nu conține cifre diferite de k, programul va afișa valoarea 0.

--Restricții și precizări--
1 ≤ n ≤ 2.000.000.000
--Exemplu:

Intrare
123242 2

Ieșire
12

--Explicație--
S-a citit n=123242 iar produsul afișat este P=12 (=1*3*4).
```