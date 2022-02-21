# Queue

<blockquote data-ke-style="style2"><b><br />1. Queue</b></blockquote>
<p data-ke-size="size16">&nbsp;Queue은 자료구조(Data Structure) 중 하나로, 처음에 저장된 데이터를 가장 먼저 꺼내는<span>&nbsp;</span><b>FIFO</b>(: First In First Out) 구조이다.&nbsp;</p>
<p align="center"><img src="https://user-images.githubusercontent.com/56003992/148514798-dcd326a9-177e-408e-90e4-edcd2ceba29c.png"  width="300" height="350"></p>


<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;Stack과 반대로 Queue는 순서의 변경 없이 먼저 넣은 것을 먼저 꺼낸다. 이와 같이 Queue는 데이터를 꺼낼 때 항상 첫 번째 저장된 데이터를 삭제하므로, ArrayList와 같은 배열 기반의 Collection 클래스를 사용한다면 데이터를 꺼낼 때마다 빈 공간을 채우기 위해 데이터의 복사가 발생하므로 비효율적이다. 따라서 Queue는 데이터의 추가/삭제가 용이한 LinkedList로 구현하는 것이 더 적합하다.</p>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>2. Method</b></blockquote>
<table style="border-collapse: collapse; width: 100%; height: 113px;" border="1" data-ke-align="alignLeft" data-ke-style="style12">
<tbody>
<tr style="height: 23px;">
<td style="width: 27.093023255813954%; text-align: center; height: 23px;"><b>Method</b></td>
<td style="width: 72.90697674418604%; text-align: center; height: 23px;"><b>Explanation</b></td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">boolean add(Object o)</td>
<td style="width: 72.90697674418604%; height: 18px;">Queue에 객체 o 삽입</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">Object remove( )</td>
<td style="width: 72.90697674418604%; height: 18px;">Queue에서 객체를 추출</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">Object element( )</td>
<td style="width: 72.90697674418604%; height: 18px;">Queue에서 객체를 반환</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">boolean offer(Object o)</td>
<td style="width: 72.90697674418604%; height: 18px;">Queue에 객체 o를 저장</td>
</tr>
<tr style="height: 18px;">
<td style="width: 27.093023255813954%; height: 18px;">Object poll( )</td>
<td style="width: 72.90697674418604%; height: 18px;">Queue에서 객체를 추출</td>
</tr>
<tr>
<td style="width: 27.093023255813954%;">Object peek( )</td>
<td style="width: 72.90697674418604%;">Queue에서 객체를 반환</td>
</tr>
</tbody>
</table>
<p data-ke-size="size16"><span>&nbsp;삽입을 할 때는 add( )나 offer( )를 사용한다.</span></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><span>&nbsp;둘의 차이점이 무엇인지 의문을 가질 수도 있는데, add( )는 Collection에서 나오고, offer( )는 Queue에서 나온다. 용량 제한이 있을 시 add( )는 항상 true를 반환하므로, 요소를 추가할 수 없는 경우 예외를 throw한다. 반면, offer( )는 요소를 추가할 수 없는 경우 false를 반환한다.&nbsp;</span></p>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>3. Queue 선언과 생성</b></blockquote>
<pre id="code_1641543151189" class="java" data-ke-language="java" data-ke-type="codeblock"><code>Queue q = new LinkdedList();</code></pre>
<p data-ke-size="size16">&nbsp;Queue는 다음과 같이 생성된다. 왜 LinkedList로 생성할까? Queue는 사실 interface이다. 이는 &nbsp;Java API 문서를 참고하면 알 수 있는 부분이다. Deque, PriorityQueue 등 여러 클래스들이 Queue 인터페이스를 구현한 클래스들이다. 만약 특별한 목적이 없다면 LinkedList()로 생성해서 사용해주면 된다.</p>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>4. Queue의 활용</b></blockquote>
<p data-ke-size="size16">➡️ 최근 사용문서, 인쇄작업 대기목록, 버퍼</p>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>5. Queue 메서드 사용해보기</b></blockquote>
<pre id="code_1641543763259" class="java" data-ke-language="java" data-ke-type="codeblock"><code>
import java.util.LinkedList;
import java.util.Queue;
&nbsp;
public class Main {
&nbsp;	public static void main(String[] args) {
&nbsp;		Queue&lt;Integer&gt; q = new LinkedList&lt;Integer&gt;();
&nbsp;		
&nbsp;		q.offer(3);
&nbsp;		q.add(1);
&nbsp;		q.offer(2);
&nbsp;		
&nbsp;		System.out.println(q.peek());	// 3
&nbsp;		System.out.println(q.element() + "\n");	// 3
&nbsp;        
&nbsp;		System.out.println(q.poll());	// 3
&nbsp;		System.out.println(q.remove());	// 1
&nbsp;		System.out.println(q.poll());	// 2
&nbsp;		System.out.println(q.isEmpty());// true
&nbsp;	}
}
</code></pre>
<p data-ke-size="size16">&nbsp;</p>
