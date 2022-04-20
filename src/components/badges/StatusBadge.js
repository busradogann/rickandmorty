/* StatusBadge componenti listeleme sayfalarında karakter status badge'leri için oluşturuldu. 
Badgeler karakter statusune göre farklı renkte basılıyor.
*/

const StatusBadge = (item) => {
  const status = item.item.status;

  return (
    <div>
       {(() => {
        if (status === 'Dead') {
          return (
            <div className={` position-absolute badge bg-danger`}>
              {status}
            </div>
          );
        } else if (status === 'Alive') {
          return (
            <div className={` position-absolute badge bg-success`}>
              {status}
            </div>
          );
        } else {
          return (
            <div className={`position-absolute badge bg-secondary`}>
              {status}
            </div>
          );
        }
      })()} 
    </div>
  )
}

export default StatusBadge;