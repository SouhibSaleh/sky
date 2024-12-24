

public class Program
{
    public static void Main(string[]args)
    {
        Console.WriteLine("Hello, could you please give me the value of x and y");
        Console.Write("x: ");
        double x = Convert.ToDouble(Console.ReadLine());
        Console.Write("y: ");
        double y = Convert.ToDouble(Console.ReadLine());
        
        Calculator temp = new Calculator { x = x, y = y };

        Console.WriteLine($"Sum ({temp.x} + {temp.y}): {temp.Add()}");
        Console.WriteLine($"Difference ({temp.x} - {temp.y}): {temp.Subtract()}");
        Console.WriteLine($"Product ({temp.x} * {temp.y}): {temp.Multiply()}");
        Console.WriteLine($"Quotient ({temp.x} / {temp.y}): {((temp.y==0)? "Cannot divide by zero" : temp.Divide())}");


    }
}


class Calculator
{
    public double x { set; get; }
    public double y { set; get; }
    public double Add()
    {
        return x + y;
    }
    public double Subtract()
    {
        return x - y;
    }
    public double Multiply()
    {
        return x * y;
    }
    public double Divide()
    {
        if (y == 0)
        {
            return 0;
        }
        return Convert.ToDouble(x) / Convert.ToDouble(y);
    }


}