import './ContactTable.css';

const DATA = [{
  key: 'residence',
  title: 'Residence',
  value: 'Australia'
}, {
  key: 'address',
  title: 'Address',
  value: 'Doncaster East, VIC',
}, {
  key: 'email',
  title: 'Email',
  value: (
    <a href="mailto:daneezhao@gmail.com">
      daneezhao@gmail.com
    </a>
  ),
}, {
  key: 'phone',
  title: 'Phone',
  value: '+0123 123 456 789'
}];

const ContactTable = () => (
  <div>
    <table className="homepage__contact">
      <tbody>
        {DATA.map(({ key, title, value }) => (
          <tr key={key}>
            <td>{title}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ContactTable;
