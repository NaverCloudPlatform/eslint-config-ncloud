# Naver Cloud Platform Javascript Coding Conventions

* eslint-config-ncloud 는 네이버 클라우드 플랫폼 자바스크립트 코딩컨벤션을 지원하는 [eslint](http://eslint.org/) 룰 셋입니다.
* eslint-config-ncloud 는 [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) 와 [eslint-config-naver](https://github.com/naver/eslint-config-naver) 룰셋 기준으로 작성되었습니다.

> ### eslint-config-naver 는 2 개의 룰 셋을 제공합니다.
>
> * ES6+ 룰 셋 : `ncloud`
> * ES5 룰 셋 : `ncloud/es5`

## Install

```
#npm install eslint-config-ncloud
```

## Usage

### ES6+ 룰 셋을 사용하는 경우

```
// .eslintrc 파일
{
  "extends": "ncloud"
}
```

### ES5 룰 셋을 사용하는 경우

```
// .eslintrc 파일
{
  "extends": "ncloud/es5"
}
```


### License

```
Copyright (c) 2018 NAVER BUSINESS PLATFORM Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
