# Stack

<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><b><br />1. Stack</b></blockquote>
<p data-ke-size="size16">&nbsp;Stack은 자료구조(Data Structure) 중 하나로, 마지막에 저장된 데이터를 가장 먼저 꺼내는 <b>LIFO</b>(: Lask In First Out) 구조이다.&nbsp;</p>
<p align="center"><img src="https://user-images.githubusercontent.com/56003992/148509310-b6e5339c-7de4-4501-ae51-d2b8ff3b36d7.png"  width="300" height="350"></p>


<p data-ke-size="size16">&nbsp;위의 그림처럼 0, 1, 2를 순차적으로 삽입하면 추출할 때는 2, 1, 0 순서로 추출된다. 이렇게 순차적으로 추가 및 삭제되므로, 구현 시에 Collection 클래스 중 ArrayList와 같은 배열 기반의 Collection 클래스로 구현하는 것이 적합하다. 반대로&nbsp;Queue는 (Queue에 대해 다룰 때 다시 설명하겠지만,) &nbsp;배열 기반의 Collecrtion 클래스로 구현할 경우 빈 공간을 채우기 위한 복사가 많이 일어나므로 비효율적이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>2. Method</b></blockquote>
<table style="border-collapse: collapse; width: 100%; height: 113px;" border="1" data-ke-align="alignLeft" data-ke-style="style12">
<tbody>
<tr style="height: 23px;">
<td style="width: 27.093023255813954%; text-align: center; height: 23px;"><b>Method</b></td>
<td style="width: 72.90697674418604%; text-align: center; height: 23px;"><b>Explanation</b></td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">boolean empty( )</td>
<td style="width: 72.90697674418604%; height: 18px;">Stack이 비어있는지 알려주는 메서드</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">Object peek( )</td>
<td style="width: 72.90697674418604%; height: 18px;">Stack 맨 위에 저장된 객체 반환</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">Object pop( )</td>
<td style="width: 72.90697674418604%; height: 18px;">Stack 맨 위에 저장된 객체 추출</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">Object push(Object o)</td>
<td style="width: 72.90697674418604%; height: 18px;">Stack에 객체 o 삽입</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">int search(Object o)</td>
<td style="width: 72.90697674418604%; height: 18px;">Stack에서 객체 o를 찾아 인덱스 반환 (인덱스는 1부터 시작됨)</td>
</tr>
</tbody>
</table>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>3. Stack의 활용</b></blockquote>
<p data-ke-size="size16">&nbsp;Stack이나 Queue를 막상 어디에 써야할까에 대해 잘 떠오르지 않을 수 있다. 하지만 생각보다 우리의 생활에 빈번히 사용되고 있다.</p>
<p data-ke-size="size16">➡️ 수식 계산, 수식 괄호 검사, 워드 프로세서의 Undo/Redo, 웹 브라우저의 뒤로가기/앞으로가기</p>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>4. Stack 구현하기</b></blockquote>
<p data-ke-size="size16">&nbsp;위의 설명에서 Stack은 ArrayList와 같은 배열 기반 Collection 클래스로 구현하는 것이 좋다고 하였다. 그럼 이제 Stack을 직접 구현해보자. (책이나 다른 블로그를 보면 상속을 통해 구현하는 경우가 있는데, 필자는 클래스 안에서 ArrayList를 생성해 구현해보겠다.)</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>i) Node 클래스</b></p>
<pre id="code_1641540584965" class="java" data-ke-language="java" data-ke-type="codeblock"><code>
public class Node {
&nbsp;	int index;
&nbsp;	int value;
&nbsp;	
&nbsp;	Node(int index, int value) {
&nbsp;		this.index = index;
&nbsp;		this.value = value;
&nbsp;	}
&nbsp;	
&nbsp;	int getValue() {
&nbsp;		return value;
&nbsp;	}
}
</code></pre>
<p data-ke-size="size16">: 먼저 Node 클래스를 하나 생성해주자. 값과 인덱스를 저장해놓으면 된다. 여기서 의문점이 생긴다. "사용자가 지정하는 제네릭에 따라 타입이 바뀌지 않나요?" 이 부분은 건너뛰고, 이번 구현에서는 정수값만을 취급하는 Node를 통해 기본적인 구조에 대해 알고, 구현하는 방법에 대해서만 따져보도록 하자.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">ii) Stack 클래스</p>
<pre id="code_1641541008175" class="java" data-ke-language="java" data-ke-type="codeblock"><code>

import java.util.ArrayList;
import java.util.EmptyStackException;

public class Stack {
&nbsp;	ArrayList<Node> dataStructure;
&nbsp;	static int index = 1;
&nbsp;	static int size = 0;
&nbsp;	
&nbsp;	Stack(){
&nbsp;		dataStructure = new ArrayList<Node>();
&nbsp;	}
&nbsp;	
&nbsp;	boolean empty() {
&nbsp;		if(dataStructure.size() == 0)  { return true; }
&nbsp;		else  { return false; }
&nbsp;	}	// empty
&nbsp;	
&nbsp;	int size() {
&nbsp;		return dataStructure.size();
&nbsp;	}
&nbsp;	
&nbsp;	void push(int i) {
&nbsp;		Node node = new Node(index++, i);
&nbsp;		dataStructure.add(node);
&nbsp;		size++;
&nbsp;	}	// push
&nbsp;	
&nbsp;	int peek() {
&nbsp;		try {
&nbsp;			Node lastInNode = dataStructure.get(size-1);
&nbsp;			return lastInNode.getValue();
&nbsp;		}catch(IndexOutOfBoundsException e) {
&nbsp;			throw new EmptyStackException();
&nbsp;		}
&nbsp;	}	// peek
&nbsp;	
&nbsp;	int pop() {
&nbsp;		try {
&nbsp;			Node lastInNode = dataStructure.get(size-1);
&nbsp;			dataStructure.remove(size-1);
&nbsp;			size--;
&nbsp;			return lastInNode.getValue();
&nbsp;		}catch(IndexOutOfBoundsException e) {
&nbsp;			throw new EmptyStackException();
&nbsp;		}
&nbsp;	}	// pop
}
</code></pre>
<p data-ke-size="size16">: 다음과 같이 간단하게 Stack을 구현해주었다. Main 클래스를 통해 테스트 해보면 잘 작동되는 것을 확인할 수 있다.</p>
