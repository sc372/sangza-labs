---
title: rust | 개요 & 추리게임 (intro & guessing game)
createdDate: "2019-10-09"
updatedDate: "2019-10-09"
author: sangza
tags:
  - rust
  - intro
  - guessing-game
category: blog

draft: false
---

## 그렇다 (that's right)

프로그래밍 처음 시작은 Java 였다. 비전공자로서는 Java의 프로그래밍 시작은 보편적이다.

Java 는 JVM(Java Virtual Machine) 위에서 동작하는데 GC(Garbage collector) 가 메모리를 관리 해주기 때문에 프로그래머는 메모리 관리를 별로 신경쓰지 않아도 된다. 그렇다고 나의 애플리케이션이 메모리를 어떻게 활용하는지에 대해서 몰라도 되는건 아니다. 최적의 퍼포먼스를 유지하기 위해서는 JVM의 GC가 어떻게 동작하는지 혹은 나의 인스턴스 및 변수들이 어떻게 메모리를 차지하고 GC에 의해서 해제 되는지에 대한 학습은 불가피 하다.

결국, 메모리를 구조를 몰라도 된다는 이야기는 아니다. 어쩌면 메모리 구조와 더불어 JVM 그리고 GC 에 대한 이해 및 학습이 더 필요해 지는 것이다.

지난 회사에서 node.js 를 활용하면서 Javascript 의 유연함에 환호를 하였다. 게다가 node.js 의 런타임 환경인 V8 엔진은 C++ 코드작성 + Google 최강 조합으로 탄생 되었기에 퍼포먼스도 좋다.

Javascript를 사용해본 사람들은 알겠지만 처음 시작하기에는 쉽게 보이지만 사실 늪과 같다. 언어 특유의 유연함은 장점처럼 보이겠지만 사실은 다루기 매우 어렵다. 프로그래밍을 하다보면 스케일이 커지고 코드량이 많아짐에 있어서 불가피 하다.

동적타입의 한계, 비동기 핸들링은 높은 수준의 이해가 필요하다. (이것이 안되면 프로그램이 돌아는 가지만 결국 오류의 늪에 빠지기, 보기싫은 코드의 생산 등으로 이어짐) 그리고 V8 엔진은 Ignition + TurboFan(최적의 성능을 내기 위한 방식이라고 한다.) 의 조합으로 동작한다.

결국, node.js 도 이 부분에 대한 이해와 학습이 필요한 것이다.
<br /><br /><br />
_**그렇다. 쉽고 편하게 는 내 욕망에만 있는 것이다.**_
<br /><br /><br />

### 참고 (resources)

- [naver d2 GC 설명](https://d2.naver.com/helloworld/1329)
- [광부님 GC 설명](https://itmining.tistory.com/24)
- [자바스크립트는 어떻게 동작하는가](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-v8-%EC%97%94%EC%A7%84%EC%9D%98-%EB%82%B4%EB%B6%80-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-%ED%8C%81-6c6f9832c1d9)
- [Ignition and Turbofan](https://docs.google.com/presentation/d/1chhN90uB8yPaIhx_h2M3lPyxPgdPmkADqSNAoXYQiVE/edit#slide=id.g1357e6d1a4_0_58)
  <br /><br /><br />

## 필요한 도구 (i need dogu)

그동안 프로그래밍을 하면서 남이 만들어 놓은 수많은 도구들을 활용해왔다. 리눅스, bash shell, asdf, 메이븐, git, 이클립스, 웹스톰, vscode.. 셀수도 없다. 어떤 것은 돈을 지불하고 사용하고 어떤 것은 공짜로 사용하고, 더 멋진 도구를 찾아 헤매다가 밤을 꼬박 세우기도 한다.

이런 도구들이 없다면 어땠을까 하는 생각을 가끔한다. 그리고, 내 오류가 발생하거나 스타일에 맞지 않는 부분이 발견 되기도 한다. 돈주고 산 프로그램은 메일을 보내기도 하고 오픈소스는 커뮤니티에 질문하기도 한다.

그렇게 해오면서 바쁘다는 핑계로 오픈소스의 컨트리뷰터가 되어 보거나 직접 필요한 도구를 만들어 볼 엄두를 내보지 못했다.

최근에 진행한 프로젝트 윈도우 + 이클립스 를 활용할 수 밖에 없는 상황 이었다.
<br /><br /><br />
_**리눅스는 개발하기에 너무나 좋은 것이었다.**_
<br /><br /><br />
cli 의 환경이 너무나 그리웠다. 문득, 나한테 잘 맞는 도구를 직접 만들고 싶다는 생각이 들었다.
<br /><br /><br />

## rust!!! (녹)

나한테 필요한 도구를 만들기 위해서 어떤 언어 + 환경을 활용할까 고민을 해봤다. golang, rust 로 좁혀진 가운데, 함수형 프로그래밍을 위해서 rust를 사용하기로 결정을 했다. 아직 함수형 프로그래밍에 대해서는 부족한 부분이 많이 있다. Javascript 에서 ramda.js 나 lodash 를 활용해서 사용해본 방식이 전부 이지만 그 매력이 컸었다. rust는 그 기대를 충족하기 좋은 언어라는 글들이 많이 있었다. 그래서 선택하게되었다.
<br /><br /><br />
rust 는 시스템 프로그래밍을 하기위한 언어로서 매우 빠르고 안전하며 현대적으로 표현된 코드를 작성할 수 있고, 함수형 프로그래밍을 할 수 있는...어쩌구저쩌구..
내가 설명하는 것보다는 더욱 잘 설명 되어 있는 것을 보는 것이 낫다고 생각한다.
<br /><br /><br />
_**여러모로 간지나는 언어임에 틀림이 없는 것 같다.**_
<br /><br /><br />
다른 부분보다는 소유권(ownership) 이라는 개념을 가지고 메모리 관리를 효과적으로 할 수 있는 것이 특징이다. 한글 문서가 많지는 않지만 번역기 돌려가면서 보고 있는데 약간 생소한 느낌이긴 하지만 이것도 시간이 해결해줄 거라는 믿음으로 좀 더 들여다 봐야겠다.

앞으로 rust 관련한 내용을 잘 정리해서 블로그 운영도 꾸준히 해야겠다... 싶은데...
<br /><br /><br />

## 추리 게임 (guessing game)

프로그래밍 학습을 시작할 때 일단 동작하는 코드를 읽어 내려가는 방식으로 학습 한다.

공식 문서에도 문법적 내용 보다는 동작하는 코드를 먼저 보여주고 있다. 물론 각자 학습하는 방식은 다르기 때문에 정답은 없다.

문서에 나온 추리게임(guessing game) 앱의 코드를 보면서 읽어나가려고 한다.
<br /><br /><br />

```rust
use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1, 101);

    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        io::stdin().read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
```

<hr />

## 참고 (resources)

- [rust 공식 홈페이지](https://rust-lang.org/)
- [한글 러스트 사용자 그룹](https://rust-kr.org/)
- [한글 러스트 사용자 그룹(discord)](https://discordapp.com/channels/487203989830631435/487203989830631438)
- [rust 공식 안내서(En)](https://doc.rust-lang.org/stable/book/index.html)
- [rust 공식 안내서(Ko)](https://rinthel.github.io/rust-lang-book-ko/)
- [awesome rust](https://github.com/rust-unofficial/awesome-rust)
- [are we web yet?](http://www.arewewebyet.org/)
- [rust online editor](https://repl.it/languages/rust)
