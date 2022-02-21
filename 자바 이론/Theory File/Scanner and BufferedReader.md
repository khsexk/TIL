<blockquote data-ke-style="style2"><br /><b>1. Scanner</b></blockquote>
<p data-ke-size="size16">&nbsp;Scanner는 화면, 파일, 문자열과 같은 입력소스로부터 문자 데이터를 읽어오기 위한 목적으로 JDK 1.5부터 추가되었다. 여러 오버로딩 된 생성자를 지원하기 때문에 다양한 입력 소스로부터 데이터를 읽을 수 있다. 덕분에 JDK 1.6부터는 화면 입출력만 전문적으로 담당하는 java.io.Console이 새로 추가되었다. (나머지는 Scanner가 모두 수행할 수 있기 때문이다.)&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;또 Scanner는 기존의 방식과 다르게 nextLine( ) 대신 nextInt( ), nextLong( ) 등과 같은 타입별 메서드를 가지고 있다. 따라서 입력 받은 문자를 다시 원하는 타입으로 변환하는 수고를 덜어 준다.</p>
<pre id="code_1636474294193" class="java" data-ke-language="java" data-ke-type="codeblock"><code>Scanner sc = new Scanner(System.in);
&nbsp;
int i = sc.nextInt();
boolean b = sc.nextBoolean();
String s = sc.nextLine();</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2"><br /><b>2. BufferedReader</b></blockquote>
<p data-ke-size="size16">&nbsp;BufferedReader와 BufferedWriter는 버퍼를 이용해서 입출력의 효율을 높일 수 있도록 해주는 역할을 한다. (Scanner와 BufferedReader의 차이에 대한 글이므로 BufferedWriter에 대한 설명은 생략한다.) BufferedReader의 readLine( ) 메서드를 사용하면 데이터를 라인 단위로 읽을 수 있다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;그럼 BufferedReader를 사용하는 방법에 대해 알아보자.</p>
<pre id="code_1636474769013" class="java" data-ke-language="java" data-ke-type="codeblock"><code>import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
&nbsp;
class BufferedReaderEx {
&nbsp;	public static void main(String[] args) throws IOException {
&nbsp;		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
&nbsp;        
&nbsp;		String s = br.readLine();
&nbsp;		int i = Integer.parseInt(br.readLine);
&nbsp;	}
}</code></pre>
<p data-ke-size="size16">&nbsp;먼저 위의 패키지를 import 해줘야 한다. 굳이 외울 필요 없이 Ctrl+Shift+o를 눌러주면 Eclipse에서 자동으로 import 해주지만, 코딩 테스트를 준비한다면 외워두는 것을 권장한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;그 다음 부터는 main 클래스 안의 코드처럼 활용하면 된다. String 타입이 아닌 타입을 받기 위해서는 위와 같이 형변환이 필요하다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;여기서 주의할 점은 예외처리가 꼭 필요하다는 점이다. 방법은 두 가지인데, readLine( )을 할 때마다 try~catch문을 활용하거나 throws IOException을 통하여 작업하는 것이다. 대개는 throws IOException을 활용한다. 이 때는 " <b>import java.io.IOException</b> " 패키지를 import 해주고, main 클래스 옆에 " <b>throws IOException</b> "을 작성한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<pre id="code_1636474935266" class="java" data-ke-language="java" data-ke-type="codeblock"><code>BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
&nbsp;
StringTokenizer st = new StringTokenizer(br.readLine(), " ");
int n = Integer.parseInt(st.nextToken());
int m = Integer.parseInt(st.nextToken());
&nbsp;
int[] arr = br.readLine().split(" ");</code></pre>
<p data-ke-size="size16">&nbsp;앞서 말했듯이 BufferedReader의 readLine( ) 메서드는 데이터를 라인 단위로 읽는다. 만약 공백 단위로 데이터를 가공하려면 위와 같은 방법을 사용하면 된다. 첫 번째 방법은 StringTokenizer를 활용하는 방법이고, 두 번째 방법은 split을 활용하는 방법이다. (StringTokenizer에 대해서는 나중에 다시 다루겠다.)</p>
<p data-ke-size="size16">&nbsp;</p>
<blockquote data-ke-style="style2">&nbsp;<br /><b>3. Scanner와 BufferedReader의 차이</b></blockquote>
<p data-ke-size="size16">&nbsp;BufferedReader를 설명할 때 말했듯이 BufferedReader는 JDK 1.5 이전부터 사용됐지만, 즉 Scanner보다 오래됐지만, 버퍼를 이용하기에 입출력의 효율이 비교할 수 없을 정도로 좋아진다. 그렇다면 BufferedReader가 무조건 좋을까? 그건 아니다. Buffer를 사용하기 때문에 BufferedReader가 Scanner보다 메모리 효율에서 떨어진다.&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;결론을 말하자면 입출력의 효율을 높이려면 BufferedReader를 사용하면 되고, 메모리의 효율을 높이려면 Scanner를 사용하면 된다.&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>ps.</b> 백준 알고리즘 사이트에서 문제를 풀다보면 가끔 정답인데도 시간초과의 문제로 오답 처리가 된다. 이 때는 문제에서 시간 제한을 확인하면 된다. <b>1초, 2초일 때는 크게 상관없지만, 0.15초와 같이 150ms 안에 프로그램이 종료해야 하는 문제에서는 BufferedReader를 사용하는 것이 효율적이다.</b> (Scanner를 사용해서 풀면 대부분 100ms가 넘기 때문이다.)</p>
