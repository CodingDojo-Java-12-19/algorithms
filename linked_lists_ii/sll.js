function Node(val)
{
    this.val=val;
    this.next=null;
}
function SL()
{
    this.head=null;

    this.add=function(val)
    {
        if (this.head==null)
        {
            this.head=new Node(val);
        }
        else
        {
            runner=this.head;
            while(runner.next !=null)
            {
                runner=runner.next
            }
            runner.next= new Node(val);
        }
        return this;
    }
    this.remove=function(val)
    {
        if(this.head.val==val)
        {
            this.head=head.next;
        }
        else
        {
            runner=this.head;
            while(runner.next != null)
            {
                if (runner.next.val==val)
                {
                    runner.next=runner.next.next;
                    break;
                }
                runner=runner.next;
            }
        }
        return this;
    }
    this.print=function()
    {
        runner=this.head;
        
        while(runner !=null)
        {
            console.log(runner.val);
            runner=runner.next;
        }
    }

}
list= new SL();
list.add(8).add(10).add(5);
list.print();
list.remove(10);
list.print();
//console.log(list);