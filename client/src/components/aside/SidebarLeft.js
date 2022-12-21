export default function SidebarLeft() {
  return (
    <div>
      <div href='/'>
        <span>Home</span>
      </div>
      <div>
        <span>PUBLIC</span>
        <div>
          <div href='/'>
            <svg xmlns='http://www.w3.org/2000/svg'></svg>
            <span>Questions</span>
          </div>
          <div href='/tags'>
            <span>Tags</span>
          </div>
          <div href='/users'>
            <span>Users</span>
          </div>
        </div>
      </div>
    </div>
  );
}
