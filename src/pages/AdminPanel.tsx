// ...imports and type definitions...

const AdminPanel: React.FC = () => {
  // ...all useStates, handlers, and effects (keep as is)...

  return (
    <div style={{ maxWidth: 1050, margin: "40px auto", padding: 24 }}>
      {/* PRODUCT CARD */}
      {/* ...ProductForm code... */}

      {/* PRODUCTS LIST */}
      <div style={cardClass}>
        <h3 style={{ marginBottom: 16 }}>All Products</h3>
        <div style={{ maxHeight: 230, overflowY: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) && products.length ? (
                products.map((p) => (
                  <tr key={p._id} style={{ borderTop: "1px solid #eee" }}>
                    <td>{p.name}</td>
                    <td>₹{p.price}</td>
                    <td>
                      {p.image && (
                        <img
                          src={`https://navgrihini.onrender.com${p.image}`}
                          alt={p.name}
                          style={{
                            width: 44,
                            height: 44,
                            objectFit: "cover",
                            borderRadius: 5,
                          }}
                        />
                      )}
                    </td>
                    <td>{p.category}</td>
                    <td>
                      <button
                        onClick={() => setEditingProduct(p)}
                        style={buttonClass}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(p._id)}
                        style={{ ...buttonClass, background: "#f44336" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    style={{ textAlign: "center", color: "#888" }}
                  >
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* BANNERS CARD */}
      {/* ...form and add banner code... */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(banners) && banners.length ? (
            banners.map((b) => (
              <tr key={b._id} style={{ borderTop: "1px solid #eee" }}>
                <td>
                  <img
                    src={`http://localhost:8000${b.image}`}
                    alt={b.title}
                    style={{
                      width: 90,
                      height: 36,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                </td>
                <td>{b.title}</td>
                <td>
                  {b.link && (
                    <a href={b.link} target="_blank" rel="noopener noreferrer">
                      {b.link}
                    </a>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteBanner(b._id)}
                    style={{ ...buttonClass, background: "#f44336" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                style={{ textAlign: "center", color: "#888" }}
              >
                No banners found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ORDER SECTION */}
      <div style={cardClass}>
        <h2>All Orders</h2>
        {orderMsg && <div style={{ color: "red" }}>{orderMsg}</div>}
        <div style={{ maxHeight: 200, overflowY: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th>User</th>
                <th>Products</th>
                <th>Total</th>
                <th>Payment Status</th>
                <th>Ordered At</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(orders) && orders.length ? (
                orders.map((o) => (
                  <tr key={o._id} style={{ borderTop: "1px solid #eee" }}>
                    <td>{o.user}</td>
                    <td>
                      {o.products.map((p, idx) => (
                        <div key={idx}>
                          {p.name} (x{p.quantity})
                        </div>
                      ))}
                    </td>
                    <td>₹{o.total}</td>
                    <td>{o.paymentStatus}</td>
                    <td>{new Date(o.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    style={{ textAlign: "center", color: "#888" }}
                  >
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* USERS CARD */}
      <div style={cardClass}>
        <h2>All Registered Users</h2>
        {userMsg && <div style={{ color: "red" }}>{userMsg}</div>}
        <div style={{ maxHeight: 180, overflowY: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th>Name</th>
                <th>Email</th>
                <th>Registered At</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length ? (
                users.map((u) => (
                  <tr key={u._id} style={{ borderTop: "1px solid #eee" }}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{new Date(u.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    style={{ textAlign: "center", color: "#888" }}
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
